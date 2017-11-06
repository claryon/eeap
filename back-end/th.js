const Web3 = require("web3");
const fs = require('fs');

require('./db_connect');
var Report = require("./report");


solidityCoder = require('./node_modules/web3/lib/solidity/coder');

const web3 = new Web3(new Web3.providers.HttpProvider("http://dockerhost:8000"));
if (! web3.isConnected()) {
	console.log("Error: web3 cannot connect to geth client, is it running?");
	process.exit(1);
}

var discoveredReports = {};

function parseDiscoveredParameters(contractAddress, functionName, parameters) {
	if (! discoveredReports[contractAddress])
		discoveredReports[contractAddress] = {};
	if (functionName === "initialise1") {
		discoveredReports[contractAddress].address = contractAddress;
		discoveredReports[contractAddress].sync = 2;
		discoveredReports[contractAddress].timestamp = {registration: new Date(parameters[0] * 1000), submission: new Date(parameters[1] * 1000)}; // unix timestap to date: *1000
		discoveredReports[contractAddress].issuerIdentification = {LEI: parameters[2], 
																	name: parameters[3], 
																	language: parameters[4], 
																	registrationCountry: parameters[5]};
		discoveredReports[contractAddress].reportIdentification = {reportId: parameters[6], 
																	regulationType: parameters[7], 
																	auditorId: parameters[8], 
																	standardCode: parameters[9],
																	reportingCode: parameters[10]};
	} else if (functionName === 'initialise2') {
		discoveredReports[contractAddress].NCAIdentification = {stateAuthority: parameters[0],
																	NCAcountryIdentification: parameters[1],
																	OAMCountryIdentification: parameters[2]};
		discoveredReports[contractAddress].reportSource = {NCAReportURL: parameters[3],
															IssuerReportURL: parameters[4],
															EEAP_ReportURL: parameters[5]}
		discoveredReports[contractAddress].checkSum = {checkSumElectronic:  parameters[6], checksumNonEdit: parameters[7]};
	}
	console.log(discoveredReports[contractAddress].timestamp);
	if (discoveredReports[contractAddress].timestamp && 
		discoveredReports[contractAddress].NCAIdentification) {
		var discoveredReport = new Report(discoveredReports[contractAddress]);
		console.log("Saving report from DLT to mongo. Data: " + discoveredReports[contractAddress]);
        discoveredReport.save(function(err) {
            if (err) console.log('Error saving report to mongo. DLT address: ' + contractAddress + ', Data: ' + discoveredReports[contractAddress]);
            console.log("Saved report at address " + contractAddress + ' to mongo DB');
            delete discoveredReports[contractAddress];
        });

	} else {
		console.log("Not enough data to create contract");
	}
}

account = web3.personal.listAccounts[0];
web3.personal.unlockAccount(account, "sander");


// TODO: remove duplicate
reportStructure = fs.readFileSync(__dirname+"/contract/report.json").toString();
contracts = JSON.parse(reportStructure)["contracts"];
var reportABI = JSON.parse(contracts['report_container.sol:Report'].abi);
var functionHashes = getFunctionHashes(reportABI);

var filter = web3.eth.filter('latest');

filter.watch(function(error, result){
	var block = web3.eth.getBlock(result, true);
	console.log('current block #' + block.number);
	block.transactions.forEach(function (transaction) {
		if (transaction.from === account) return;
		var functionName = findFunctionByHash(functionHashes, transaction.input);
		if (functionName === "initialise1") {
			var parameters = solidityCoder.decodeParams(["uint128","uint128","string","string","string","string","string","string","string","string","string"], transaction.input.substring(10));
			console.log("Contract " + transaction.to + ": " + functionName + "(" + parameters + ")");
			parseDiscoveredParameters(transaction.to, "initialise1", parameters);
		} else if (functionName === "initialise2") {
			var parameters = solidityCoder.decodeParams(["string","string","string","string","string","string","string","string"], transaction.input.substring(10));
			console.log("Contract " + transaction.to + ": " + functionName + "(" + parameters + ")");
			parseDiscoveredParameters(transaction.to, "initialise2", parameters);
		}

	});
});

function getFunctionHashes(abi) {
  var hashes = [];
  for (var i=0; i<abi.length; i++) {
    var item = abi[i];
    if (item.type != "function") continue;
    var signature = item.name + "(" + item.inputs.map(function(input) {return input.type;}).join(",") + ")";
    var hash = web3.sha3(signature);
    console.log(item.name + '=' + hash);
    hashes.push({name: item.name, hash: hash});
  }
  return hashes;
}

function findFunctionByHash(hashes, functionHash) {
  for (var i=0; i<hashes.length; i++) {
    if (hashes[i].hash.substring(0, 10) == functionHash.substring(0, 10))
      return hashes[i].name;
  }
  return null;
}


function syncReportToDLT(report){
	console.log("Pushing report " + report.reportIdentification.reportId + " to the DLT");
	reportStructure = fs.readFileSync(__dirname+"/contract/report.json").toString();
	contracts = JSON.parse(reportStructure)["contracts"];
	var reportABI = JSON.parse(contracts['report_container.sol:Report'].abi);
	var reportCode = "0x" + contracts['report_container.sol:Report'].bin;
	reportContract = web3.eth.contract(reportABI);

	reportContract.new({data: reportCode, gas:web3.eth.estimateGas({data:reportCode})*10, from: account}, function(err, contract){
		if(err){
			console.log(err);
		}else{
			if(!contract.address){
				console.log("Report contraction creation transaction: " + contract.transactionHash);
				report.sync = 1;
				report.save(function (err) {
					if (err) console.log("Error saving sync flag for report with id " + report._id + ": " + err);
				});
			}else{
				console.log("Report contract created at address " + contract.address + ", initialising contract...");
				
				contract.initialise1(
						report.timestamp.registration.getTime() / 1000,
						report.timestamp.submission.getTime() / 1000,
						report.issuerIdentification.LEI,
						report.issuerIdentification.name,
						report.issuerIdentification.language,
						report.issuerIdentification.registrationCountry,
						report.reportIdentification.reportId,
						report.reportIdentification.regulationType,
						report.reportIdentification.auditorId,
						report.reportIdentification.standardCode,
						report.reportIdentification.reportingCode,
						{from: account, gas: 200000}
						);

				contract.initialise2(
						report.NCAIdentification.stateAuthority,
						report.NCAIdentification.NCAcountryIdentification,
						report.NCAIdentification.OAMCountryIdentification,
						report.reportSource.NCAReportURL,
						report.reportSource.IssuerReportURL,
						report.reportSource.EEAP_ReportURL,
						report.checkSum.checkSumElectronic,
						report.checkSum.checksumNonEdit,
						{from: account, gas: 200000}
						);
				console.log("Report " + report.reportIdentification.reportId + " successfully registered on the DLT");
				report.sync = 2;
				report.save(function (err) {
					if (err) console.log("Error saving sync flag for report with id " + report._id + ": " + err);
				});
			}

		}
	});
}



//TODO! implement check to not submit reports that have been sent to DLT but not miner yet (meaning sync flag no, but already submitted to DLT)


function sync(){
	Report.find({"sync": 0}, function (err, reports) {
		console.log("Found " + reports.length + " reports to sync:");
		for(i = 0; i < reports.length; i++){
			syncReportToDLT(reports[i]);
		}
	})
}

setInterval(function(){
		// Every 5 seconds check if there is new information on the mongodatabase if database is connected
		if (typeof db !== 'undefined') {
			console.log("Synchronizing mongo content to DLT");
			sync();
		} else {
			console.log("Delaying sync until database connection becomes available...")
		}
	},
	5000);


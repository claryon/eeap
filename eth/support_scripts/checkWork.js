var mining_threads = 1

function checkWork() {
	if (eth.getBlock("pending").transactions.length > 0) {
		if (eth.mining) return;
		console.log("== Pending transactions! Mining...");
		miner.start(mining_threads);
	} else {
		return;

	}
}

//eth.filter("latest", function(err, block) { checkWork(); });
//eth.filter("pending", function(err, block) { checkWork(); });


setTimeout(function(){
	checkWork();
},50000);

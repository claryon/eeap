var mining_threads = 1

function checkWork() {
	if (eth.getBlock("pending").transactions.length > 0) {
		if (eth.mining) return;
		console.log("== Pending transactions! Mining...");
		miner.start(mining_threads);
	} else {
		// After all work is done keep mining for another 30 seconds
		setTimeout(function(){
			miner.stop();
			console.log("== No transactions! Mining stopped.")
		},50000);
	}
}

//eth.filter("latest", function(err, block) { checkWork(); });
//eth.filter("pending", function(err, block) { checkWork(); });


setTimeout(function(){
	checkWork();
},50000);

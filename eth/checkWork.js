var mining_threads = 1
var l = 5
var c = 0
function checkWork() {
	if (eth.getBlock("pending").transactions.length > 0) {
		if (eth.mining) return;
		console.log("== Pending transactions! Mining...");
		miner.start(mining_threads);
		c = 1
	}else {
		if (c==1){
			setTimeout(function(){
				miner.stop();
				console.log("== Mine timer has expired");
			}, 100000)
			c = 0
		}
	}
}

eth.filter("latest", function(err, block) { checkWork(); });
eth.filter("pending", function(err, block) { checkWork(); });

checkWork()

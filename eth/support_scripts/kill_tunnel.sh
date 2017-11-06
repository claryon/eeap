for pid in $(ps -ef |grep ssh |grep amaz |sed 's/ \+/ /g' |cut -d' ' -f2); do
	sudo  kill $pid;
done

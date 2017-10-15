#!/bin/bash

if ! hash docker-compose 2>/dev/null; then
	echo "[error] docker-compose not found, is it installed?"
	exit 1
elif [ ! -f ./eth/geth ]; then
	echo "[error] Unable to locate geth executable in eth directory."
	exit 1
fi

echo "[*] Initiating geth data..."
cd eth
./deploy.sh
cd ..

pwd
echo "[*] Geth data initialized."

echo "[*] Launching geth client and docker containers."



export MONGO_DATADIR="$(pwd)/docker-volumes/mongo/data"
export DOCKERHOST=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)

tmux new-session -s FISMA -d "cd eth && ./start_geth.sh" \; \
	split-window -h -d "docker-compose up" \; \
		select-layout even-horizontal \; \
			attach \;


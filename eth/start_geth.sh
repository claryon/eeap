#!/bin/bash

geth="./geth"

address=$(cat genesis.json |sed -n '/"alloc"/{n;p}' |sed 's/"//g' |sed 's/: {//g' |tr -d '\t')

$geth --etherbase "$address" --password <(cat node_config/keystore/key.priv) --unlock "$address" --identity "node" --rpc --rpcaddr "${DOCKERHOST}" --rpcport "8000" --rpccorsdomain "*" --datadir "./node_config" --port "1111" --nodiscover --ipcpath "/tmp/geth_node.ipc" --networkid 7858765456757 --nat "any" --rpcapi="db,eth,net,web3,personal,web3" console

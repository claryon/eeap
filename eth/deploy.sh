#!/bin/bash
rm -rf node_config
rm genesis.json

mkdir node_config
echo "Press RETURN after Address is displayed"
tee in |fisma_geth --datadir "node_config" account new 2>&1 $@ |tee out
address=$(cat out |grep Address |cut -d' ' -f2 |sed 's/{\|}//g')
password=$(cat in |head -1)
cat << EOF > genesis.json
{
	"nonce": "0x0000000000000042",
	"timestamp": "0x0",
	"parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
	"extraData": "0x0",
	"difficulty": "0x00010000",
	"gasLimit": "0x8000000",
	"mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
	"coinbase": "0x3333333333333333333333333333333333333333",
	"alloc": {
		"0x$address": {
			"balance": "10000000000000000000000"
		}
	}
}
EOF

cd node_config/keystore
cat << EOF > key.priv
$password
EOF
cd ../..
rm in
rm out
geth --datadir "node_config" init genesis.json
pwd

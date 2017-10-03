#!/bin/bash
cd eth
tmux new-session -s "FISMA" -d "./start_eth.sh"
tmux rename-window "geth client"


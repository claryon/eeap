../geth --exec "loadScript('./checkWork.js');" attach /tmp/geth_node.ipc
../geth --exec "loadScript('./addPeer.js');" attach /tmp/geth_node.ipc

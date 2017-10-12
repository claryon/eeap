#!/bin/bash

if [ -z "$1" ]
  then
    echo "Mode not specified: \"--dev\" or \"--prod\""
    exit 1
fi

if [ "$1" == "--dev" ]; then
   docker run -it --name fisma_mongo fisma/mongo
elif [ "$1" == "--prod" ]; then
   docker run -d --name fisma_mongo fisma/mongo
else
   echo "Mode should be either \"--dev\" or \"--prod\""
fi



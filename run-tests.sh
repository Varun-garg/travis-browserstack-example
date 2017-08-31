#!/bin/bash

npm i -g wait-port

npm start &
wait-port 8080

npm test

#!/usr/bin/env bash

npm install

# create front-end resources
cd frontend && npm install && npm run build

# copy them to static folder
cd .. && cp -r ./frontend/build/* static/

# copy json to static folder
cp ./data/* static/

# start server.js with ability to serve files from 'static' folder
npm run server









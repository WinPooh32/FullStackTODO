#!/usr/bin/env bash

version=`cat version`
output="../frontend/assets/todo"

# https://github.com/OpenAPITools/openapi-generator
openapi-generator generate \
 --additional-properties=usePromises=true \
 -i $version/openapi.oas3.yaml \
 -g javascript -o $output

# replace index file path in package.json
sed -i 's/\"dist\/index.js\"/\"src\/index.js\"/g' $output/package.json

# install package build dependencies
cd $output
npm install
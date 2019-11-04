#!/usr/bin/env bash

version=`cat version`

#https://github.com/OpenAPITools/openapi-generator
openapi-generator generate -i $version/openapi.oas3.yaml -g typescript-axios -o ../frontend/assets/api
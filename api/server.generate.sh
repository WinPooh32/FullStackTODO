#!/usr/bin/env bash
export GO_POST_PROCESS_FILE="`which gofmt` -w"

ProjectDir="../backend"
OutputDir="api_generated"
Version=`cat version`
PackageName="todo"

# https://github.com/OpenAPITools/openapi-generator
# Generate server api code
openapi-generator generate --enable-post-process-file \
 --package-name $PackageName \
 -i $Version/openapi.oas3.yaml \
 -g go-gin-server \
 -o $ProjectDir/$OutputDir

# cleanup
PP="$ProjectDir/$PackageName"
PO="$ProjectDir/$OutputDir"

# backup previous api code
mv $PP $PP.`date +"%Y-%m-%d.%T"`.bak

# move generated go package to project folder
mv $PO/go $PP

# delete generated folder
rm -r $PO
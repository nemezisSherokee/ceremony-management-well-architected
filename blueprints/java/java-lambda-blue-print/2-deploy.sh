#!/bin/bash
set -eo pipefail
ARTIFACT_BUCKET=$(cat bucket-name.txt)
STACK_NAME=$(cat bucket-name.txt)
TEMPLATE=template-mvn.yml
#TEMPLATE=target/sam.native.yaml
if [ $1 ]
then
  if [ $1 = mvn ]
  then
    #TEMPLATE=target/sam.native.yaml
	TEMPLATE=template-mvn.yml
	mkdir -p persitentTarget
	cp target/function.zip persitentTarget/function.zip  2>/dev/null || : # to ignore errors if any
    #mvn package -Pnative
	#mvn clean install -Pnative -Dquarkus.native.container-build=true
  fi
# else
  # gradle build -i
fi
aws cloudformation package --template-file $TEMPLATE --s3-bucket $ARTIFACT_BUCKET --output-template-file out.yml
aws cloudformation deploy --template-file out.yml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM
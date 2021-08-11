#!/bin/bash
#set -eo pipefail
STACK_NAME=$(cat bucket-name.txt)
ARTIFACT_BUCKET=$(cat bucket-name.txt)
if [[ $# -eq 1 ]] ; then
    STACK_NAME=$1
    echo "Deleting stack $STACK_NAME"
fi
FUNCTION=$(aws cloudformation describe-stack-resource --stack-name $STACK_NAME --logical-resource-id function --query 'StackResourceDetail.PhysicalResourceId' --output text)
aws cloudformation delete-stack --stack-name $STACK_NAME
echo "Deleted $STACK_NAME stack."

if [ -f bucket-name.txt ]; then
	aws s3 rb --force s3://$ARTIFACT_BUCKET; rm bucket-name.txt; break;
fi

rm -f out.yml 
rm -rf target

#!/bin/bash
BUCKET_NAME=$1

if [ -z "$BUCKET_NAME" ]
then
      echo "bucket name is not specified. try to run it from environment variable"
	  BUCKET_NAME=$(echo "${CODEBUILD_BUILD_ARN}" | awk -F'/' '{ print $2 }' | awk -F':' '{ print $1 }')
	  #EXAMPLE ON THE NEXT LINE:
	  #BUCKET_NAME=$(echo "arn:aws:codebuild:region-ID:account-ID:build/codebuild-demo-project:b1e6661e-e4f2-4156-9ab9-82a19EXAMPLE" | awk -F'/' '{ print $2 }' | awk -F':' '{ print $1 }')
fi

if [ -z "$BUCKET_NAME" ]
then
      echo "ERROR could not have a bucket name. Try to set environment variable CODEBUILD_BUILD_ARN. Actual value is : ${CODEBUILD_BUILD_ARN}"
	  exit 1
fi

BUCKET_EXISTS=$(aws s3api head-bucket --bucket $BUCKET_NAME 2>&1 || true)

if [ -z "$BUCKET_EXISTS" ]; then
  echo "Bucket exists"
  # aws s3 rb s3://$BUCKET_NAME --force
else
  aws s3 mb s3://$BUCKET_NAME
  echo $BUCKET_NAME > bucket-name.txt
fi

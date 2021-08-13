#!/bin/bash
set -eo pipefail
STACK_NAME=$(cat bucket-name.txt)
FUNCTION=$(aws cloudformation describe-stack-resource --stack-name $STACK_NAME --logical-resource-id function --query 'StackResourceDetail.PhysicalResourceId' --output text)

aws lambda invoke --function-name $FUNCTION --cli-binary-format raw-in-base64-out --payload file://payload.json out.json
cat out.json
# echo ""

  # inputFormat=""
  # if [ $(aws --version | awk '{print substr($1,9)}' | cut -c1-1) -ge 2 ]; then inputFormat="--cli-binary-format raw-in-base64-out"; fi

  # set -x

  # aws lambda invoke response.txt \
    # ${inputFormat} \
    # --function-name ${FUNCTION} \
    # --payload file://payload.json \
    # --log-type Tail \
    # --query 'LogResult' \
    # --output text |  base64 --decode
  # { set +x; } 2>/dev/null
  # cat response.txt && rm -f response.txt

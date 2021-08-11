set -eu -o pipefail

STACK_NAME=$(pwd |  awk -F "/" '{print $NF}')
echo "creating following buildproject and stack : $STACK_NAME"

echo "Checking if stack exists ..."




if ! aws cloudformation describe-stacks  --stack-name $STACK_NAME ; then

  echo -e "\nStack does not exist, creating ..."
aws cloudformation create-stack --stack-name $STACK_NAME --template-body file://../../../cicd/codebuildproject.yaml \
--parameters  ParameterKey=PathToConsider,ParameterValue=blueprints/java/java-lambda-blue-print	ParameterKey=ProjectName,ParameterValue=$STACK_NAME \
                                --capabilities CAPABILITY_NAMED_IAM 

 
else

  echo "Waiting for stack update to complete ..."
aws cloudformation update-stack --stack-name $STACK_NAME --template-body file://../../../cicd/codebuildproject.yaml \
--parameters  ParameterKey=PathToConsider,ParameterValue=blueprints/java/java-lambda-blue-print	ParameterKey=ProjectName,ParameterValue=$STACK_NAME \
                                --capabilities CAPABILITY_NAMED_IAM 
 

fi

echo "Finished create/update successfully!"

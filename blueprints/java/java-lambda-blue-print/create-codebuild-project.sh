STACK_NAME=$(pwd |  awk -F "/" '{print $NF}')
echo "creating following buildproject and stack : $STACK_NAME"
aws cloudformation create-stack --stack-name $STACK_NAME --template-body file://../../../cicd/codebuildproject.yaml \
--parameters  ParameterKey=PathToConsider,ParameterValue=blueprints/java/java-lambda-blue-print	ParameterKey=ProjectName,ParameterValue=$STACK_NAME \
                                --capabilities CAPABILITY_NAMED_IAM 

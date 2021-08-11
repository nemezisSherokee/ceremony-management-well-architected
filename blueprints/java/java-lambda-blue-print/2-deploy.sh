#!/bin/bash
set -eo pipefail
ARTIFACT_BUCKET=$(cat bucket-name.txt)
STACK_NAME=$(cat bucket-name.txt)
TEMPLATE=template-mvn.yml
#TEMPLATE=target/sam.native.yaml
NATIVE=false
MVN=false
SONARQUBE=""
while [ "$1" ]
do
  if [ $1 = mvn ]
  then
    MVN=true
  fi
  
  if [ $1 = native ]
  then
    NATIVE=true
  fi
  
  if [ $1 = sonarqube ]
  then
    docker run -d --name sonarqube9000 -p 9000:9000 sonarqube:8.9.0-community 2>/dev/null || :   # to ignore errors if any
	sleep 25
	docker ps -a
	SONAR_QUBE_IP_ADRESS=$(docker inspect sonarqube9000 | jq '.[].NetworkSettings.Networks.bridge.IPAddress' | sed "s/\"//g")
	SONAR_QUBE_IP_ADRESS=sonarqube9000
    bash sonarqube_token_generator.sh $STACK_NAME $SONAR_QUBE_IP_ADRESS 9000
	TOKEN=$(cat token.txt)
    #curl -u admin:admin -X POST "http://localhost:9005/api/projects/create?project=$STACK_NAME&name=$STACK_NAME"
    SONARQUBE=" sonar:sonar   -Dsonar.projectKey=$STACK_NAME  -Dsonar.host.url=http://$SONAR_QUBE_IP_ADRESS:9000  -Dsonar.login=$TOKEN -Dsonar.java.binaries="target/classes" -Dsonar.scm.disabled=true sonar-quality-gate:check"
	
	echo $SONARQUBE
  fi

  shift
done

  
  if [ "$MVN" == true ]
  then
  
	TEMPLATE=template-mvn.yml
    if [ "$NATIVE" == true ]
    then
      #mvn clean install -Pnative										      ## RUN LOCAL ON WINDOWS TO CREATE A NATIVE FUNCTION
	  mvn clean install -Pnative -Dquarkus.native.container-build=true        ## RUN LOCAL ON WINDOWS
	  mkdir -p persitentTarget
	  cp target/function.zip persitentTarget/function.zip  2>/dev/null || :   # to ignore errors if any
	  
	  else
	  echo "mvn clean install $SONARQUBE"
	  #mvn clean install $SONARQUBE
    fi

  fi


exit 0

# if [ $1 ]
# then
  # if [ $1 = mvn ]
  # then
    # #TEMPLATE=target/sam.native.yaml
	# TEMPLATE=template-mvn.yml

	
	# # aws iam create-role --role-name lambda-ex --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}' 2>/dev/null
	# # LAMBDA_ROLE_ARN=$(aws iam get-role --role-name lambda-ex --query "Role.Arn")
	# # export LAMBDA_ROLE_ARN=arn:aws:iam::467546108131:role/lambda-ex
	# # echo "Role = $LAMBDA_ROLE_ARN"
    # # mvn clean package
	# # bash target/manage.sh create 
	# # bash target/manage.sh invoke
	# # bash target/manage.sh delete

    # # mvn clean install -Pnative										  ## RUN LOCAL ON WINDOWS TO CREATE A NATIVE FUNCTION
	# # mvn clean install -Pnative -Dquarkus.native.container-build=true ## RUN LOCAL ON WINDOWS
	# mkdir -p persitentTarget
	# cp target/function.zip persitentTarget/function.zip  2>/dev/null || : # to ignore errors if any
  # fi
# # else
  # # gradle build -i
# fi
aws cloudformation package --template-file $TEMPLATE --s3-bucket $ARTIFACT_BUCKET --output-template-file out.yml
aws cloudformation deploy --template-file out.yml --stack-name $STACK_NAME --capabilities CAPABILITY_IAM
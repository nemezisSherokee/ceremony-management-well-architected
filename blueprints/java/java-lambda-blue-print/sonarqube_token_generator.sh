#!/bin/bash

TOKEN_NAME="nemezis"
LOGIN_NAME="admin"
LOGIN_PASSWD="admin"
PROJECT_NAME=$1
SONAR_QUBE_HOST=$2
SONAR_QUBE_PORT=$3
x=1

echo "1- CREATE a PROJECT..."
curl -u $LOGIN_NAME:$LOGIN_PASSWD -X POST "http://$SONAR_QUBE_HOST:$SONAR_QUBE_PORT/api/projects/create?project=$PROJECT_NAME&name=$PROJECT_NAME"

while [ $x -le 5 ]
do

	Result=$(curl -u $LOGIN_NAME:$LOGIN_PASSWD  -d "name=$TOKEN_NAME&login=$LOGIN_NAME" -X POST "http://$SONAR_QUBE_HOST:$SONAR_QUBE_PORT/api/user_tokens/generate")
	TOKEN=$(echo $Result| jq '.token')
	ERROR=$(echo $Result| jq '.errors[0].msg')

	if [ "$ERROR" == "null" ] #[ -z "${ERROR}"==="null" ] 								# if error is null, then the token creation succeded and the variable token has the token value
	then
		  echo "There is no error."
		  echo "TOKEN IS = $TOKEN"
		  break;
	else											# we muss create a new token
		  echo "revoking the existing token"
		  #1- revoke the token
		  curl -u $LOGIN_NAME:$LOGIN_PASSWD  -d "name=$TOKEN_NAME&login=$LOGIN_NAME" -X POST "http://$SONAR_QUBE_HOST:$SONAR_QUBE_PORT/api/user_tokens/revoke"
		  #2- create a new one
		  #RESULT=$(curl -u $LOGIN_NAME:$LOGIN_PASSWD  "http://localhost:9005/api/user_tokens/search" | jq '.userTokens[].name')
	fi
	x=$(( $x + 1 ))
done

echo $TOKEN | sed "s/\"//g" > token.txt


#!/bin/bash
DB_PORT_27017_TCP_ADDR=$1
DB_PORT_27017_TCP_PORT=$2

while ! curl  "http://$DB_PORT_27017_TCP_ADDR:$DB_PORT_27017_TCP_PORT/api/server/version"
do
  echo "$(date) - still trying at http://$DB_PORT_27017_TCP_ADDR:$DB_PORT_27017_TCP_PORT/api/server/version"
  docker ps -a
  sleep 1
done
echo "$(date) - connected successfully"

#docker run -d --name sonarqube9000 -p 9008:9000 sonarqube:8.9.0-community


Ceremony Management system.

Requirements


- Write an email to system administrator to apply for creating a management for an upcomming ceremony
- Create a ceremony
- Add guest to a ceremony
- Add Seats / or SeatSystem (for example table or seat area) to a ceremony
- Close ceremony
- List Ceremonies
- Get Ceremonies list
- Add Manager to a ceremony
- Add Worker to a ceremony
- Checking a Gest to a ceremony
- view Ceremony statistic

Non functionnal requirements
- Define the CD/CD pipeline of the system
- Define a IAC for the CICD pipeline

Which services are needed:


Cognito
aws Lambda
aws IAM
aws Appsync
aws Amplify
aws Api Gateway
Cloudformation
Aws CodePIpeline
Aws CodeCommit
Aws CodeBuild
Aws DynamoDB
Aws TimeStream
Aws Xray
Aws CloudWatch
Aws Cloudwatch Rules
Aws Config
Aws Route53
Aws S3
Aws SNS
Aws SQS
React  - Flutter
Cucumber
Selenium
Java
Aws EC2
Docker
Artifactory
Ansible
---------------------------------

		Cognito
			- Identity Pool
			- Client
			- IAM 
		aws Lambda
			- aws lambda function in NodesJs To test if such a ceremony [Name, Date] already exists
			- Execution Roles [DynamoDB, CloudWatch]
		aws IAM
			- Managed Policy [Write, Read in dynamo DB]
			- Role [Role to be assumed by services to get privileges of the attached managed policy]
		aws Appsync
			- API
			- Schema
			- Query, Mutation, Subscription
			- Resolvers
			- DataSource
		aws Amplify
			- GraphQLApi
			- IdentityPool
		aws Api Gateway
			- Call Lambda functions
			- CI/CD Pipeline and Webhook
			- Resources, Method
		Cloudformation
			- Output
			- Parameters
			- CodeURI
			- Stack
		SAM
			- CodeURI
			- CodeDeploy Application
			- Stack
		Aws CodePIpeline
			- Role to call S3
		Aws CodeCommit
		Aws CodeBuild
			- Role to call S3
			- Role to call Lambda
		Aws DynamoDB
			- Tables
			- Througput
			- GSI/LSI
		Aws TimeStream
			- Statistic
		Aws Xray
			- AWS Lambda Sampling
		Aws CloudWatch
			- Loggroups
			- Metrics
			- Alarms
			
		Aws Cloudwatch Rules
			- Rules on Alarms
			- SNS for Notifications
		Aws Config
			- For security purposes
		Aws Route53
			- DSN
			- BlueGreen Deployment
		Aws S3
			- BuildArtefacts
			- Documentations
			- Images
		Aws SNS
			- Roles for AWS Rules
			- Roles for CodeCommit
			- Roles for CodeBuild 
		Aws SQS
			- Decoupling 
		React - Flutter
			- Redux
			- 
		Cucumber
			- Feature
			- Scenario
			- StepDef
			- Gherkin
		Selenium
			- 
		Java
			- Cucumber
			- Selenium
		
		Aws EC2
			- QA Env
			- Test Env
		Docker
			- Local AWS Lambda
			- Local AWS DynamoDB
			- Ansible
		Artifactory
			- Alternative to S3 to save build artifacts
		Ansible
			- To Provision and Start environment


-----------------------

1- Scenario 1
	Given : The Ceremony-Management is open
		When The user create a ceremony
		   Then The Ceremony should listed in the list of upcomming ceremonies
	
	example image: https://hmh.engineering/aws-appsync-and-graphql-abc08097b859
	example appsync : https://adrianhall.github.io/cloud/2018/04/17/deploy-an-aws-appsync-graphql-api-with-cloudformation/
	We need: 
	For Dev
		-	DynamoDB Table
		-	Appsync Api
		-	React amplify
		-	Cognito
		-	Aws Lambda
	For Ops
		- 	Cloudformation
		- 	SAM
		- 	CodePIpeline
		-	Ansible
		-	Docker
		-	S3 or Artifactory
		-	Cucumber, Java, Selenium
	For Monitoring
		-	Aws Cloudwatch
		- 	Aws SNS
		-	AWS Config
		-	
		
		
---------
User Story üben
TDD üben
BDD üben
Issus in GIT LAB
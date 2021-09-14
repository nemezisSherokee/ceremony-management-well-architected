
var aws = require("aws-sdk");

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: process.env.LARY_SHEROKEE,
    };

    const ddb = new aws.DynamoDB.DocumentClient({
        endpoint: process.env.DDB_ENDPOINT,
      });
      const result = await ddb.put({
        TableName: process.env.API_CMWAAPI_CUSTOMERTABLE_NAME,
        Item: {
          id: '1234567890',
          name: 'F-22',
          city: 'Cool fighter jet',
          createdAt:"2021-09-14T07:36:52.688Z",
          updatedAt:"2021-09-14T07:36:52.688Z",
          __typename:"Customer"
        },
      }).promise();

      
    return JSON.stringify(response);
};

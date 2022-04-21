const js = require('fs');
let myjson = js.readFileSync('text.json');
let the_item = JSON.parse(myjson);
console.log(the_item);

var AWS = require("aws-sdk");
let awsconfig = {
  "region": "eu-west-1",
  "endpoint":"http://dynamodb.eu-west-1.amazonaws.com"
};
AWS.config.update(awsconfig);


let docClient = new AWS.DynamoDB.DocumentClient();
var parameter = {
  TableName : 'Guess',
  Item:
    the_item[0]
};

docClient.put(parameter, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success your item is add in your DynamoDB", data);
  }
});
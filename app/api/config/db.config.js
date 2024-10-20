import AWS from "./aws.config";

const db = new AWS.DynamoDB.DocumentClient();


export default db;

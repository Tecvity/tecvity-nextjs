import AWS from "aws-sdk";

AWS.config.update({
    region: process.env.TECVITY_AWS_REGION,
    accessKeyId: process.env.TECVITY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.TECVITY_AWS_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES();

export default AWS;
export { ses };
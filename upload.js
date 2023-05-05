const fs = require('fs');
const AWS = require("aws-sdk");
const ID = "AKIARXSXLJERJKYOVS7B";
const SECRET = "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";
const BUCKET_NAME = "eventdetailbucket1";
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'example.pdf',
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
uploadFile("./example.pdf")
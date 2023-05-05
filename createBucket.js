const AWS = require("aws-sdk");
const ID = "AKIARXSXLJERJKYOVS7B";
const SECRET = "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";
const BUCKET_NAME = "eventdetailbucket1";
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});
const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "ap-south-1"
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});
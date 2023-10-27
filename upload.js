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
async function uploadRemoteImage(url){
  try {
    AWS.config.update({
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      region: "us-east-1",
    });
    const s3 = new AWS.S3();
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const key = `checking/${Date.now().toString()}.jpg`;
    const params = {
      Bucket: "test",
      Key: key,
      Body: response.data,
      ContentType: 'image/jpeg',
    };
    await s3.upload(params).promise();
    let urlImage = `https://test.s3.amazonaws.com/${key}`
    return urlImage
  } catch (error) {
    
  }
}
uploadFile("./example.pdf")

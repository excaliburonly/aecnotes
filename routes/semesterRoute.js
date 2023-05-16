const express = require('express');
const Semester = require('../model/Semester');
const branch = require('../model/Branch');
const {
    S3Client,
    PutObjectCommand
  } = require("@aws-sdk/client-s3");
  
  const s3Config = {
    accessKeyId: "AKIAS57GIJWTV2SKPWXD",
    secretAccessKey: "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",
    region: "ap-south-1",
  };
  
  const s3Client = new S3Client(s3Config);

const router = express.Router()

const upload = async (file, fileName) => {
    const bucketParams = {
        Bucket: "zaatio-files",
        Key: fileName,
        Body: file.data,
      };
      try {
        const data = await s3Client.send(new PutObjectCommand(bucketParams));
        res.send(data)
      } catch (err) {
        console.log("Error", err);
      }
}

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const semester = await Semester.find();
        res.json(semester)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/:branch', async (req, res) => {
    try{
        const semester = await Semester.find({
            branch: req.params.branch
        })
        res.json(semester)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

router.post("/upload/:branch", async (req, res) => {
    const link = req.link;
    const branch = req.branch;
    const subject = req.subject;
    const semester = await Semester.find({
        branch: branch,
        name: req.semester
    });
    semester = new Semester({
        name: semester,
        branch: branch,
        subject: subject,
        link
    })
}) 

module.exports = router;
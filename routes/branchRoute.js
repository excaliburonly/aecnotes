const express = require('express');
const Branch = require('../model/Branch');

const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    const branch = new Branch({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        link: req.body.link
    })
    try {
        const dataToSave = await branch.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const branch = await Branch.find();
        res.json(branch)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;
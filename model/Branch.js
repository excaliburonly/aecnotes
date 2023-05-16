const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String
    },
    link: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Branch', branchSchema)
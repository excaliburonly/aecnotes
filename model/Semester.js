const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    branch: {
        required: true,
        type: String
    },
    subject: {
        required: true,
        type: String
    },
    link: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Semester', branchSchema)
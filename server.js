require('dotenv').config();

const express = require('express');
const fileUpload = require("express-fileupload");
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const branchRoute = require('./routes/branchRoute');
const semesterRoute = require('./routes/semesterRoute');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use(fileUpload());

app.use('/api', routes)
app.use('/branch', branchRoute)
app.use('/semester', semesterRoute)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
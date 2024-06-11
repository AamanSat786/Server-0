const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const app = express();


mongoose.connect(process.env.URI);

const serverSchema = mongoose.Schema({
    nameData: String,
    realData: String
});

const serverModel = mongoose.model('Data', serverSchema);

app.get('/getData', (req, res) => { res.json('Hello World') });


app.listen(process.env.PORT, () => { console.log('Connection Sucessfull at port 3001'); })

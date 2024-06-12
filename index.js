const express = require('express');
const mongoose = require('mongoose');

// Routes import
const mainRoute = require('./routes/mainRoute');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());
app.use(mainRoute);

// mongoose.connect(process.env.URI);

mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("connection to the Mongooose successfull :) 🎃🎃🎃");
    })
    .catch((e) => console.log(`The error has been occured to Mongoose ${e}`));

/* const serverSchema = mongoose.Schema({
    nameData: String,
    realData: String
});

const serverModel = mongoose.model('Data', serverSchema); */


app.listen(process.env.PORT, () => { console.log('Connection Sucessfull at port 3001'); })

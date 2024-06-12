const express = require('express');
const DumpDataModel = require('../model/dataSchema')

const mainRoute = express.Router();

mainRoute.get('/getData', async (req, res) => {


    let dumpData = new DumpDataModel({

        name: "Dump 01",
        realData: [
            {
                "src": "index.js",
                "use": "@vercel/node"
            },
            {
                "src": "/(.*)",
                "dest": "index.js"
            }
        ],

    });

    // dumpData = await dumpData.save();

    res.json('Hello World ' + dumpData)
});



module.exports = mainRoute;
const express = require('express');
const lensDataRouter = express.Router();
const bodyParser = require('body-parser');
var AWS = require("aws-sdk");


lensDataRouter.route('/')
.get((req,res,next) => {

    var docClient = new AWS.DynamoDB.DocumentClient();

    var table = "Osmosis_user_response";
    var lensresponse;
    
    
    var params = {
        TableName: table,
        Key:{
            "priKey": "123"
        }
    };
    
    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.statusCode = 404;
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            lensresponse=JSON.stringify(data, null, 2);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(lensresponse);
        }
    });
    });

module.exports = lensDataRouter;
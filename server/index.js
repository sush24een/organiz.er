// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const MongoClient = require('../my-app/node_modules/mongodb').MongoClient;
const assert = require('assert');

// Database Name
const dbName = 'myproject';
const client = new MongoClient('mongodb://localhost/27017',  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});


// Use connect method to connect to the server
client.connect(function(err) {
    try {
        const db = client.db(dbName);
        console.log('Connected successfully to server');
    } catch(e) {
        console.log(e);
    }
    client.close();
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
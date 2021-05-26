// server/index.js
const express = require("../my-app/node_modules/express");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('../my-app/node_modules/body-parser');
const MongoClient = require('../my-app/node_modules/mongodb').MongoClient;
//const Items = require('./schemas.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/trackDate', (req, res) => {
    MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
        if (err) throw err;
        console.log('\n\n\n\tConnected successfully to MONGO server -- ' + req.body.date);
        var db = client.db("ProjectTracker");
        /*db.findOne(req.body.date, function(err, result) {
            if (err) res.send(err);
            res.send(result);
            client.close();
        })*/
    });
});

app.post('/submitData', (req, res) => {
    var obj = {
        task: req.body.task,
        desc: req.body.desc,
        startTime: req.body.startTime,
        spentTime: req.body.spentTime
    };
    MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
        if (err) throw err;
        console.log('\n\n\n\tConnected successfully to MONGO server -- ' + req.body.date);
        var db = client.db("ProjectTracker");
        db.collection(req.body.date).insertOne(obj, function(err) {
            if (err) res.send(err);
            res.send("Submitted Successfully");
            console.log("1 document inserted in collection : " + req.body.date);
            client.close();
        })
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
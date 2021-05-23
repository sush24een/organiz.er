// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('../my-app/node_modules/body-parser');

// Mongo shit (boring parts)
const MongoClient = require('../my-app/node_modules/mongodb').MongoClient;
//const client = new MongoClient('mongodb://localhost/27017', { useNewUrlParser: true, useUnifiedTopology: true });

//console.log('\tConnected successfully to MONGO server');
/*try {
    db = client.db('ProjectTracker-ORGANIZ.ER');
    
} catch(e) {
    console.log(e);
}*/

///////////////////////////////////////////////////////////////////////////////////////

app.use(bodyParser.urlencoded({extended: true}));


app.post('/track', (req, res) => {
    MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
        if (err) throw err;
        console.log('\tConnected successfully to MONGO server');
        var db = client.db("ProjectTracker-ORGANIZ.ER");
        var obj = {
            task: req.body.task,
            desc: req.body.desc,
            startTime: req.body.startTime,
            spentTime: req.body.spentTime
        };
        db.collection(req.body.date).insertOne(obj, function(err) {
            if (err) {
                res.json(err);
                throw err;
            }
            res.send("Submitted Successfully");
            console.log("1 document inserted in collection : " + req.body.date);
        })
        client.close();
    });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
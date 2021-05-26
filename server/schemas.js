const mongoose = require("../my-app/node_modules/mongoose");
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/27017', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

var db = mongoose.connection.once('open', () => {
    console.log("YAY");
}).on('error', () => {
    console.log("NOT YAY");
});

const itemsSchema = new Schema({
    date: String,
    task: String,
    desc: String,
    startTime: String,
    spentTime: String
});

const Items = mongoose.model('inventoryItems', itemsSchema);

module.exports = Items;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'preggy';
let db;

const { populateDatabase } = require('./dbHandlers')

// Create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser: true });

client.connect(async (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log("Connected successfully to server");

    db = client.db(dbName);
    if (await db.collection('weeks').find().toArray().then(weekArray => weekArray.length) === 0) {
        populateDatabase(db, 40);
    }
});

module.exports = {
    async getWeek(week) {
        const data = await db.collection('weeks').find({ week }).toArray()
        return data[0];
    }
}
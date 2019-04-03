const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'preggy';
let db;

// Create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser: true });

client.connect(async (err) => {
    if (err) {
        throw new Error(err);
    }
    console.log("Connected successfully to server");

    db = client.db(dbName);
});

module.exports = {
    async getWeek(week) {
        const data = await db.collection('weeks').find({ week }).toArray()
        return data[0];
    }
}
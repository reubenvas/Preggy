const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'preggy';
const client = new MongoClient(url, { useNewUrlParser: true });
let db;

client.connect(async (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("Connected successfully to server");

  db = client.db(dbName);
  await db.dropDatabase();
  await populateDatabase(db, 40);
  client.close();
});


async function populateDatabase(DB, numOfWeeks) {
  const weeks = [];
  for (let i = 1; i <= numOfWeeks; i++) {
    const week = {
      week: i,
      title: "Vecka " + i,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis augue et bibendum dapibus. Morbi vehicula quis mauris pretium sagittis. Morbi semper mauris vel libero molestie, a egestas metus semper. Sed nisi diam, rutrum eu odio ac, pretium dapibus leo. Donec hendrerit tincidunt urna, id dictum nulla tristique id. Vestibulum laoreet vel turpis sed dictum. Phasellus tincidunt nulla in leo vulputate, in tincidunt justo sagittis. Sed tempor nulla semper, pharetra nisl ultrices, cursus lorem. Phasellus magna quam, aliquet sed nisi sed, venenatis blandit justo. Nunc vitae lacus velit. Ut eget lectus sit amet dolor venenatis hendrerit. Etiam ac pulvinar diam, non aliquam quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque id consequat purus. In hac habitasse platea dictumst.",
    }
    weeks.push(week);
  }
  await DB.collection("weeks").insertMany(weeks);
}

module.exports = {
  populateDatabase
}

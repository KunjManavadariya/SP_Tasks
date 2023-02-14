import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";

let client, db;

async function connectToDb() {
  if (!client) {
    client = new MongoClient(uri, { useNewUrlParser: true });
    await client.connect();
    db = client.db("ideaboard");
  }
  return client;
}

connectToDb()
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

export { db };

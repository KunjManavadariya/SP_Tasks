import * as mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017/";
export const client = new MongoClient(uri);
export const conn = async function () {
  try {
    await client.connect();
  } catch (err) {
    console.log(err);
  }
};

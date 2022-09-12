//MONGODB AND MONGOCLIENT IMPORTS
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// const ObjectId = mongodb.ObjectId;
// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());

//CONNECTION URL
const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "account-api";

//CONNECTION SETUP
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(dbName);
    // db.collection("users")
    //   .deleteMany({
    //     age: 21,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);

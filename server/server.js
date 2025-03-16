const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");
const cors = require("cors");

app.use(cors());

const uri =
  "mongodb+srv://samarpaninfotech1221:A4hqkMUW7RYF9R3u@quotation.ofzfp.mongodb.net/top?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true, // This removes the deprecation warning
});

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
    const db = client.db("top_trumps");
    const simpsonsCollection = db.collection("simpsons");
    const simpsonsRouter = createRouter(simpsonsCollection);
    app.use("/api/simpsons", simpsonsRouter);
  })
  .catch(console.error);
app.use(express.json());

app.listen(8000, function () {
  console.log(`Listening on port ${this.address().port}`);
});

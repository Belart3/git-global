const express = require("express")
const {MongoClient} = require("mongodb")
require("dotenv").config({path: "./config.env"})
const cors = require("cors")
const flatted = require("flatted")

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json());

async function getValidUser(email) {
  const client = new MongoClient(process.env.ATLAS_URI);
  const dbName = process.env.DB_NAME;
  const collName = process.env.COLLECTION_NAME;

  try {
    await client.connect();
    const collections = client.db(dbName).collection(collName);
    const query = { email: email };
    const user = await collections.findOne(query);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await client.close();
  }
}

app.get("/api/user", async (req, res) => {
  const { email } = req.query;
  const userData = await getValidUser(email);

  if (userData) {
    const validatedUser = {
      name: userData.name,
      email: userData.email,
    };
    res.status(200).json(validatedUser);
  } else {
    res.status(404).json({ message: "User not found for this email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

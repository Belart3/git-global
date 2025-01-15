// module.exports = (req, res) => {
//     res.status(200).json({ message: "Backend is working on Vercel!" });
//   };

  
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function getValidUser(email) {
  const client = new MongoClient(process.env.ATLAS_URI);
  const dbName = process.env.DB_NAME;
  const collName = process.env.COLLECTION_NAME;

  try {
    await client.connect();
    const collections = client.db(dbName).collection(collName);
    const query = { email: email };
    const data = collections.find(query);
    for await (const doc of data) {
      return doc;
    }
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    await client.close();
  }
}

// Exporting the serverless function for Vercel
module.exports = async (req, res) => {
  const { method } = req;

  // Handle GET request to /api/connect
  if (method === "GET") {
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
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

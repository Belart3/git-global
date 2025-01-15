const express = require("express")
const {MongoClient} = require("mongodb")
require("dotenv").config({path: "./config.env"})
const cors = require("cors")
const flatted = require("flatted")

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json());


const DB = process.env.ATLAS_URI
const client = new MongoClient(DB)
const dbName = process.env.DB_NAME
const collName = process.env.COLLECTION_NAME

async function getValidUser (email) {
    try {
        await client.connect()
        const collections = client
        .db(dbName) 
        .collection(collName);
        //collections.forEach((collections) => console.log(collections.s.namespace.collection))
        // const data = await collections.find({}).toArray()
        const query = {email : email}
        const data = collections.find(query)
        for await (const doc of data) {
            return doc;
        }
    } catch (error) {
        console.error(error)
        return null;
    } finally{
        await client.close()
    }
}

app.get("/api/user", async (req, res) => {
    const {email} = req.query
    const userData = await getValidUser(email);
    if(userData) {
        const validatedUser = {
            name: userData.name,
            email: userData.email
        };
        //res.json(flatted.stringify(userData))
        res.json(validatedUser)
    } else{
        res.status(404).json({message: "Email not found"})
    }
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})

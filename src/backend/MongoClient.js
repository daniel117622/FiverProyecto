const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://daniel117622:ids@danieldelacruz.iavhn.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)
const db = client.db("fiver_artistas")

module.exports = db;
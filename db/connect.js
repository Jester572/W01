const { MongoClient } = require('mongodb');
require("dotenv").config();

let _db

async function main() {

    const uri = process.env.connection_string;
    console.log(uri);
    const client = new MongoClient(uri);
    _db = client
    try {
        await client.connect();

        // await listDatabases(client);
        // await getContactList(client)

    } catch (e) {
        console.error(e);
    } 
}

function getDb() {
    if (!_db) {
        throw Error ('Db not initialized');
    }
    return _db;
};



main().catch(console.error);





module.exports = {main, getDb};
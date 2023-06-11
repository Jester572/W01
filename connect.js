const { MongoClient } = require('mongodb');
require("dotenv").config();
console.log(process.env.connection_string)

async function main() {

    const uri = process.env.connection_string;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        setTimeout(() => {client.close()}, 1500)
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.contacts.find()}`);
    })
}
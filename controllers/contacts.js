const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getSingle = async (req, res) => {

}
const getContactList = async (req, res, next) => {
    //Initializes the database
    const database = await mongodb.getDb().db("contacts").collection("contacts");
    const results = await database.find();
    results.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }

module.exports = { getContactList };
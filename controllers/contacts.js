const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getContactList = async (req, res, next) => {
    //Initializes the database
    const database = await mongodb.getDb().db("contacts").collection("contacts");
    const results = await database.find();
    results.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }
const getSingleContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id)
  const database = await mongodb.getDb().db("contacts").collection("contacts");
  const result = await database.find({_id : userId})
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0])
  })
}
module.exports = { getContactList, getSingleContact };
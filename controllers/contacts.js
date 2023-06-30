const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const getContactList = async (req, res) => {
  //Initializes the database
  const database = await mongodb.getDb().db("contacts").collection("contacts");
  const results = await database.find();
  results.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleContact = async (req, res) => {
  const userId = new ObjectId(req.params.id)
  const database = await mongodb.getDb().db("contacts").collection("contacts");
  const result = await database.find({ _id: userId })
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0])
  });
};

const addContact = async (req, res) => {

  const database = await mongodb.getDb().db("contacts").collection("contacts");
  const newContact = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    fav_color: req.body.fav_color,
    birth_day: req.body.birth_day
  };

  const response = await database.insertOne(newContact);
  console.log(response);
  if (response.acknowledged){
    res.status(201).json(response)
  } else {
    res.status(500).json(response.error || 'Error occurred while creating contact')
  };
};

const updateContact = async (req, res) => {
  const database = await mongodb.getDb().db("contacts").collection("contacts");
  const userId = new ObjectId(req.params.id);
  const newContact = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    fav_color: req.body.fav_color,
    birth_day: req.body.birth_day
  };

  const response = await database.replaceOne({_id: userId}, newContact);
  console.log(response);
  if (response.acknowledged){
    res.status(204).json(response)
  } else {
    res.status(500).json(response.error || 'Error occurred while creating contact')
  };
};

const deleteContact = async (req, res) => {
  const database = await mongodb.getDb().db("contacts").collection("contacts");
  const userId = new ObjectId(req.params.id);

  const response = await database.deleteOne({_id: userId})
  console.log(response);
  if (response.acknowledged){
    res.status(204).json(response)
  } else {
    res.status(500).json(response.error || 'Error occurred while creating contact')
  };
};

module.exports = { getContactList, getSingleContact, addContact, updateContact, deleteContact };
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const dotenv = require('dotenv')
dotenv.config();

const cors = require('cors');

app.use(express.json()); // for parsing application/json
app.use(cors());

const url = process.env.URL;

mongoose.connect(url,
  {
  }).then(() => { console.log('Database connected..') }).catch((err) => console.log(err));


app.get('/getUsers', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/createUser', async (req, res) => {
  try {
    const user = new UserModel(req.body);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3001, () => {
  console.log(`Server listening at 3001`);
});
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

app.use(express.json()); // for parsing application/json

mongoose.connect("mongodb+srv://thashmikax:4uJX8YX6mTGStgjU@cluster0.o2oihzs.mongodb.net/finance-tracker?retryWrites=true&w=majority");

app.use(express.json()); // for parsing application/json

app.get('/getUsers', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/createUser', async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
    console.log(`Server listening at 3001`);
});
const mongoose = require("mongoose");
const users = require("../model/usersModel");

require("./mongoose");

const userOneObjectID = new mongoose.Types.ObjectId();
const userTwoObjectID = new mongoose.Types.ObjectId();
const userThreeObjectID = new mongoose.Types.ObjectId();

const userOne = {
  _id: userOneObjectID,
  name: "Alex",
  email: "Alex@gmail.com",
  age: 19,
};

const userTwo = {
  _id: userTwoObjectID,
  name: "Mike",
  email: "Mike@gmail.com",
  age: 25,
};

const userThree = {
  _id: userThreeObjectID,
  name: "John",
  email: "John@gmail.com",
  age: 31,
};

const setUpDatabase = async () => {
  await users.deleteMany();
  await new users(userOne).save();
  await new users(userTwo).save();
  await new users(userThree).save();
  await mongoose.disconnect();
};

setUpDatabase();

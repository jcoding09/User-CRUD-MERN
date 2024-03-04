const mongoose = require("mongoose");
const dbConnect = require("../config/dbconfig");
const userModel = require("../model/usersModel");

const initializeDB = async () => {
  // Connect to the database
  dbConnect();

  // Check if there are any existing users
  const existingUsers = await userModel.find();

  // If no users exist, seed the database with default data
  if (existingUsers.length === 0) {
    try {
      // Add three default users
      const defaultUsers = [
        { name: "Alex", email: "alex@example.com", age: 30 },
        { name: "Mike", email: "mike@example.com", age: 25 },
        { name: "John", email: "johne@example.com", age: 35 },
      ];

      // Insert the default users into the database
      await userModel.insertMany(defaultUsers);

      console.log("Default data seeded successfully");
    } catch (error) {
      console.error(`Error seeding default data: ${error.message}`);
    }
  }
};

module.exports = initializeDB;

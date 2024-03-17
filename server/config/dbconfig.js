require("dotenv").config();
const mongoose = require("mongoose");

//ES7 method to connect with DB
const dbConnect = async () => {
  try {
    //const uri = process.env.MONGODB_URI;

    const uri = "mongodb://localhost:27017/MERN_CRUD";

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const conn = await mongoose.connect(uri, options);
    console.log(`MongoDB database Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB : ${error}`);
  }
};

module.exports = dbConnect;

/* 
ES6 method to connect with DB

module.exports = () => {
	const connection = mongoose
		.connect(process.env.MONGODB_URI)
		.then((result) => console.log(`MongoDB databse Connected : ${connect.connection.host}`))
		.catch((error) => console.log(`Error connecting to MongoDB : ${error}`));
};
*/

require("dotenv").config();
const mongoose = require("mongoose");

//ES7 method to connect with DB
const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFinadandModify: false,
    });
    console.log(`MongoDB database Connected : $(connect.connection.host)`);
  } catch (error) {
    console.log(`Error connecting to MongoDB : $(error)`);
  }
};

module.exports = dbConnect;
/* 
ES6 method to connect with DB

module.exports = () => {
	const connection = mongoose
		.connect(process.env.MONGODB_URI)
		.then((result) => console.log(`MongoDB databse Connected : $(connect.connection.host)`))
		.catch((error) => console.log(`Error connecting to MongoDB : $(error)`));
};
*/

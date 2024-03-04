const app = require("./app");
require("dotenv").config();
const initializeDB = require("./model/defaultDB");

// Initialize default database connection

initializeDB();

const PORT = process.env.PORT || 5000;

//making app to listen on port from .env file which is 8001

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

const express = require("express");
const path = require("path");
const dbConnect = require("./config/dbconfig");
const app = express();

// database connection
dbConnect();

// Use hpp, xss, helmet, cors express-mogo-sanitize for better security
// Use serve-index to serves pages that contain directory listings for a given path.

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.use("/api/users", require("./routes/usersRoutes"));
module.exports = app;
/* Production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}*/

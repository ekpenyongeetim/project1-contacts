// server.js
// import express package that was installed through require("express")
const express = require("express");
// require body parser that was installed
const bodyParser = require("body-parser");
// add mogodb library that was just installed
const mongodb = require("./data/database");
// create app that has all the functionality of the express package
const app = express();

const port = 3000;
app.use(bodyParser.json());
// call the routes from the routes folder
app.use("/", require("./routes"));

// listen at port 3000
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || port, () => {
      console.log(
        "Database is listening and node Running on port " +
          (process.env.PORT || port)
      );
    });
  }
});

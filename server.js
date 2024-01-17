// server.js
// import express package that was installed through require("express")
const express = require("express");

// create app that has all the functionality of the express package
const app = express();
// add mogodb library that was just installed
const mongodb = require("./data/database");

const port = 3000;
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

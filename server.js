// server.js
// import express package that was installed through require("express")
const express = require("express");
// require body parser that was installed
const bodyParser = require("body-parser");
// add mogodb library that was just installed
const mongodb = require("./data/database");
// create app that has all the functionality of the express package
const port = 3000;
const app = express();

// for routes to work across site
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  // call the routes from the routes folder
  .use("/", require("./routes"));

process.on("uncaughtException", (err, origin) => {
  console.log(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
});

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

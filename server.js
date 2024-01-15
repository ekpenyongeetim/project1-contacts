// import express package that was installed through require("express")
const express = require("express");

// create app that has all the functionality of the express package
const app = express();

// express package comes with get function. use it with the app
// app.get says if we reach homepage("/") send Hello
app.get("/", (req, res) => {
  res.send("Hello there from express");
});

const port = 3000;
// listen at port 3000
app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || port));
});

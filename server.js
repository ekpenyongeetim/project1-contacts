// import express package that was installed through require("express")
const express = require("express");
// create app that has all the functionality of the express package
const app = express();

const port = 3000;
// call the routes from the routes folder
app.use("/", require("./routes"));

// listen at port 3000
app.listen(process.env.PORT || port, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || port));
});

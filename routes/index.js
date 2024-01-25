// index.js
// import express Router
const routes = require("express").Router();

routes.use("/", require("./swagger"));

// express package comes with get function. use it with the app
// app.get says if we reach homepage("/") send Hello
/*app.get("/", (req, res) => {
  res.send("Hello there from express");
});
*/
// Route to homepage
routes.get("/", (req, res) => {
  //#swagger.tags=["Hello World"]
  res.send("Hello World");
});

// route to users page by checking the user.js file
// when you type /users, go to user.js
routes.use("/contacts", require("./contacts"));

module.exports = routes;

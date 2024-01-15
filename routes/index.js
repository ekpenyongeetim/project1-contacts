// import express Router
const routes = require("express").Router();

// import lesson1 to use it's routes
const lesson1Controller = require("../controllers/lesson1");

// express package comes with get function. use it with the app
// app.get says if we reach homepage("/") send Hello
/*app.get("/", (req, res) => {
  res.send("Hello there from express");
});
*/
// use this method by calling lesson1 controller
routes.get("/", lesson1Controller.homeRoute);
routes.get("/about", lesson1Controller.aboutRoute);
routes.get("/users", lesson1Controller.usersRoute);

module.exports = routes;

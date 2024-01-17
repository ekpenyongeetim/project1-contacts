// Users.js
const routes = require("express").Router();

const contactsController = require("../controllers/contacts");

// call the userController function from u../controllers/sers.js
routes.get("/", contactsController.getAll);

routes.get("/:id", contactsController.getSingle);

module.exports = routes;

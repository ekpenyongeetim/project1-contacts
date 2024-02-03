// Users.js
const routes = require("express").Router();

const contactsController = require("../controllers/contacts");
const validation = require("../middleware/validate");
// call the userController function from u../controllers/sers.js
// get all
routes.get("/", contactsController.getAll);

// get one
routes.get("/:id", contactsController.getSingle);

// post
routes.post("/", validation.saveContact, contactsController.createUser);

// put
routes.put("/:id", validation.saveContact, contactsController.updateUser);

// delete
routes.delete("/:id", contactsController.deleteUser);

module.exports = routes;

const { Router } = require("express");
const controller = require("../controllers/userController");
const validateUser = require("../middlewares/userValidator");
const checkUserExists = require("../middlewares/checkUserExistsValidator");


const route = Router();

route.get("/", controller.getUsers);

route.get("/:id", checkUserExists, controller.getUserById);

route.post("/", validateUser, controller.createUser);

route.delete("/:id", checkUserExists, controller.deleteUser);



module.exports = route;
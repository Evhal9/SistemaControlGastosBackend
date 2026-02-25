const { Router } = require("express");
const controller = require("../controllers/userController");

const route = Router();

route.get("/", controller.getUsers);

route.get("/:id", controller.getUserById);

route.post("/", controller.createUser);

route.delete("/:id", controller.deleteUser);

//route.put("/:id", controller.updateUser);

module.exports = route;
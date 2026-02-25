const { Router } = require("express");
const controller = require("../controllers/ingresosController");

const route = Router();

route.get("/:id", controller.getIncomesFromUser);

route.post("/:id", controller.createIncome);

//route.delete("/:id", controller.deleteIncome);

//route.put("/:id", controller.updateUser);

module.exports = route;
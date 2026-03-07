const { Router } = require("express");
const controller = require("../controllers/ingresosController");
const {User, Income} = require ("../../db/models")

const route = Router();

route.get("/:userId", controller.getIncomesFromUser);

route.post("/:userId", controller.createIncome);

route.delete("/:userId/:id", controller.deleteIncome);

route.put("/:userId/:id", controller.updateIncome);

route.get("/", controller.all);

module.exports = route;
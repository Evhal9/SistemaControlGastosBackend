const { Router } = require("express");
const controller = require("../controllers/gastosController");

const route = Router();

route.get("/:userId", controller.getExpensesFromUser);

route.post("/:userId", controller.createExpense);

route.delete("/:userId/:id", controller.deleteExpense);

route.put("/:userId/:id", controller.updateExpense);

module.exports = route;
const { Router } = require("express");
const controller = require("../controllers/gastosController");
const validateExpense = require("../middlewares/expenseValidator");
const checkUserExists = require("../middlewares/checkUserExistsValidator");
const checkExpenseOwnership = require("../middlewares/checkExpenseOwnership");


const route = Router();

route.get("/:userId",checkUserExists, controller.getExpensesFromUser);

route.post("/:userId", checkUserExists,validateExpense, controller.createExpense);

route.delete("/:userId/:id",checkUserExists, checkExpenseOwnership, controller.deleteExpense);

route.put("/:userId/:id", checkUserExists, checkExpenseOwnership, validateExpense, controller.updateExpense);

module.exports = route;
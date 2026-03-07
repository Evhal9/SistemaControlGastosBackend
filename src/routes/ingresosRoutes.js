const { Router } = require("express");
const controller = require("../controllers/ingresosController");
const validateIncome = require("../middlewares/incomeValidator");
const checkUserExists = require("../middlewares/checkUserExistsValidator");
const checkIncomeOwnership = require("../middlewares/checkIncomeOwnership");

const route = Router();

route.get("/:userId",checkUserExists, controller.getIncomesFromUser);

route.post("/:userId", validateIncome, checkUserExists, controller.createIncome);

route.delete("/:userId/:id",checkUserExists, checkIncomeOwnership, controller.deleteIncome);

route.put("/:userId/:id", checkUserExists, checkIncomeOwnership, validateIncome, controller.updateIncome);


module.exports = route;
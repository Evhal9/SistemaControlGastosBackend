const { Expense } = require("../../db/models");

const checkExpenseOwnership = async (req, res, next) => {
  try {

    const { userId, id } = req.params;

    const expense = await Expense.findOne({
      where: {
        id: id,
        userId: userId
      }
    });

    if (!expense) {
      return res.status(404).json({
        message: "El gasto no existe o no pertenece al usuario"
      });
    }

    req.expense = expense;

    next();

  } catch (error) {
    res.status(500).json({
      message: "Error al verificar el gasto",
      error
    });
  }
};

module.exports = checkExpenseOwnership;
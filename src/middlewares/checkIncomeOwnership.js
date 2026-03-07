const { Income } = require("../../db/models");

const checkIncomeOwnership = async (req, res, next) => {
  try {

    const { userId, id } = req.params;

    const income = await Income.findOne({
      where: {
        id: id,
        userId: userId
      }
    });

    if (!income) {
      return res.status(404).json({
        message: "El ingreso no existe o no pertenece al usuario"
      });
    }

    req.income = income;

    next();

  } catch (error) {
    res.status(500).json({
      message: "Error al verificar el ingreso",
      error
    });
  }
};

module.exports = checkIncomeOwnership;
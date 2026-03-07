const Joi = require("joi");

const expenseSchema = Joi.object({
  descripcion: Joi.string().min(3).max(100).required(),

  categoria: Joi.string().min(3).max(50).required(),

  metodo: Joi.string().valid("Efectivo", "Tarjeta", "Transferencia").required(),

  monto: Joi.number().positive().required(),

  fecha: Joi.date().iso().optional()
});

const validateExpense = (req, res, next) => {

  const { error } = expenseSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Error de validación",
      error: error.details[0].message
    });
  }

  next();
};

module.exports = validateExpense;
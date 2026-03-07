const Joi = require("joi");

const incomeSchema = Joi.object({

  descripcion: Joi.string().min(3).max(100).required(),

  categoria: Joi.string().min(3).max(50).required(),

  metodo: Joi.string().valid("Efectivo", "Tarjeta", "Transferencia").required(),

  monto: Joi.number().positive().required(),

  fecha: Joi.date().iso().optional()
});

const validateIncome = (req, res, next) => {

  const { error } = incomeSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Datos de ingreso inválidos",
      error: error.details[0].message
    });
  }

  next();
};

module.exports = validateIncome;
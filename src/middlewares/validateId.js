const validateId = (req, res, next) => {

  const { id, userId } = req.params;

  if (id && isNaN(id)) {
    return res.status(400).json({
      message: "El id debe ser numérico"
    });
  }

  if (userId && isNaN(userId)) {
    return res.status(400).json({
      message: "El userId debe ser numérico"
    });
  }

  next();
};

module.exports = validateId;
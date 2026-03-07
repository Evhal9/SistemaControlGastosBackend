const { User } = require("../../db/models");

const checkUserExists = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    req.user = user;

    next();

  } catch (error) {
    res.status(500).json({
      message: "Error al verificar el usuario",
      error
    });
  }
};

module.exports = checkUserExists;
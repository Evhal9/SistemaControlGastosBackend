'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Income.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'usuario'
})
    }
  }
  Income.init({
    fecha: DataTypes.DATE,
    descripcion: DataTypes.STRING,
    categoria: DataTypes.STRING,
    metodo: DataTypes.STRING,
    monto: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
}
  }, {
    sequelize,
    modelName: 'Income',
  });
  return Income;
};
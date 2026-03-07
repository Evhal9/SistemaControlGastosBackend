const {User, Expense} = require ("../../db/models")

const getExpensesFromUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const gastos = await Expense.findAll({
      where: { userId: userId }
    });

    res.status(200).json(gastos);

  } catch (error) {
    res.status(500).json({ message: "No se pudieron encontrar los gastos", error });
  }
};

const createExpense = async (req, res) => {
  try {
    const { descripcion, categoria, metodo, monto } = req.body;
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const gasto = await Expense.create({
      fecha: new Date(),
      descripcion,
      categoria,
      metodo,
      monto,
      userId
    });

    // 🔴 RESTAMOS el saldo
    await User.decrement(
      { saldo: monto },
      { where: { id: userId } }
    );

    res.status(201).json({
      message: "Nuevo gasto creado y saldo actualizado",
      gasto
    });

  } catch (error) {
    res.status(500).json({ message: "No se creó el gasto", error });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { descripcion, categoria, metodo, monto } = req.body;
    const { userId, id } = req.params;

    const user = await User.findByPk(userId);
    const expense = await Expense.findByPk(id);

    if (!user || !expense) {
      return res.status(404).json({ message: "Usuario o gasto no encontrado" });
    }

    const montoAnterior = expense.monto;

    await expense.update({
      descripcion,
      categoria,
      metodo,
      monto
    });

    const diferencia = monto - montoAnterior;

    // 🔴 Si diferencia es positiva → resta más
    // 🟢 Si diferencia es negativa → devuelve saldo
    await User.decrement(
      { saldo: diferencia },
      { where: { id: userId } }
    );

    res.status(200).json({
      message: "Gasto actualizado y saldo ajustado correctamente"
    });

  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar el gasto", error });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { userId, id } = req.params;

    const expense = await Expense.findOne({
      where: { id, userId }
    });

    if (!expense) {
      return res.status(404).json({ message: "Gasto no encontrado" });
    }

    await User.increment(
      { saldo: expense.monto },
      { where: { id: userId } }
    );

    await expense.destroy();

    res.status(200).json({
      message: "Se eliminó el gasto y se actualizó el saldo"
    });

  } catch (error) {
    res.status(500).json({ message: "No se pudo eliminar el gasto", error });
  }
};



module.exports = {getExpensesFromUser , createExpense, updateExpense , deleteExpense};
const {User, Income} = require ("../../db/models")

const all = async (req, res)=>{
  const ingresos = await Income.findAll();
  res.json(ingresos);
}

const getIncomesFromUser= async (req, res) => {
    try {
        const {userId}= req.params
        const ingresos = await Income.findAll({where:{userId: userId}});
        res.status(200).json(ingresos);
    } catch (error) {
        res.status(500).json({
          message: "No se pudieron encontrar los ingresos",
          error
});
    }
    
}

const createIncome = async (req, res) => {
    try {
        const { descripcion, categoria, metodo, monto } = req.body;
        const { userId } = req.params;

        const ingreso = await Income.create({
        fecha: new Date(),
        descripcion,
        categoria,
        metodo,
        monto,
        userId: userId
        });
        const user = await User.findByPk(userId);

        if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const nuevoSaldo = user.saldo + monto;
        await user.update({ saldo: nuevoSaldo });

        res.status(201).json({
        message: "Nuevo ingreso creado y saldo actualizado",
        ingreso
        });
    } catch (error) {
        res.status(500).json({
          message: "No se creo el ingreso",
          error
});
    }
}

const updateIncome = async (req, res) => {
  try {
    const { descripcion, categoria, metodo, monto } = req.body;
    const { userId, id } = req.params;

    const user = await User.findByPk(userId);
    const income = await Income.findByPk(id);

    if (!user || !income) {
      return res.status(404).json({ message: "Usuario o ingreso no encontrado" });
    }


    const montoAnterior = income.monto;


    await income.update({
      descripcion,
      categoria,
      metodo,
      monto
    });

    const diferencia = monto - montoAnterior;


    await User.increment(
      { saldo: diferencia },
      { where: { id: userId } }
    );

    res.status(200).json({
      message: "Ingreso actualizado y saldo ajustado correctamente"
    });

  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar el ingreso", error });
  }
};
const deleteIncome = async (req, res) => {
  try {
    const { userId, id } = req.params;

    const ingreso = await Income.findOne({
      where: { id, userId }
    });

    if (!ingreso) {
      return res.status(404).json({ message: "Ingreso no encontrado" });
    }

    
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const nuevoSaldo = user.saldo - ingreso.monto;
    await user.update({ saldo: nuevoSaldo });

    await ingreso.destroy();

    res.status(200).json({ message: "Se eliminó el ingreso y se actualizó el saldo" });

  } catch (error) {
    res.status(500).json({ message: "No se pudo eliminar el ingreso", error });
  }
};


module.exports = {getIncomesFromUser, createIncome, updateIncome , deleteIncome, all};
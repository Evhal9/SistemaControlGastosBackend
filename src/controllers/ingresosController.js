const {User, Income} = require ("../../db/models")

const getIncomesFromUser= async (req, res) => {
    try {
        const {id}= req.params
        const ingresos = await Income.findAll({where:{userId: id}});
        res.status(200).json(ingresos);
    } catch (error) {
        res.status(500).json("No se pudieron encontrar los ingresos", error)
    }
    
}

const createIncome = async (req, res) => {
    try {
        const { descripcion, categoria, metodo, monto } = req.body;
        const { id } = req.params;

        const ingreso = await Income.create({
        fecha: new Date(),
        descripcion,
        categoria,
        metodo,
        monto,
        userId: id
        });
        const user = await User.findByPk(id);

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
        res.status(500).json("No se creo el ingreso", error)
    }
}

//const = async (req, res) => {}

//const = async (req, res) => {}


module.exports = {getIncomesFromUser, createIncome};
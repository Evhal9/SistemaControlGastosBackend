const {User} = require ("../../db/models")

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json("Usuario no encontrado", error)
    }
    
    
}


const getUserById= async (req, res) => {
    try {
        const id = req.params.id
        const users = await User.findByPk(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json("Usuario no encontrado", error)
    }
    }


const getSaldoByUser= async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByPk(id);
        console.log(user)
        console.log(user.saldo)
        res.status(200).json(user.saldo);
    } catch (error) {
        res.status(500).json("Usuario no encontrado", error)
    }
    }

const createUser = async (req, res) => {
  try {

    const { nombre, password } = req.body;

    if (!nombre || !password) {
      return res.status(400).json({ error: "Nombre y password son obligatorios" });
    }

    const user = await User.create({
      nombre: nombre,
      password: password,
      saldo: 0
    });

    res.status(201).json(user);

  } catch (error) {

    res.status(500).json({
      error: "No se pudo crear el usuario",
      details: error.message
    });

  }
};

const deleteUser = async (req, res) => {
    try {
        const idSearch = req.params.id
        const user = await User.destroy( {where: { id: idSearch}});
        res.status(200).json("Usuario borrado")
 
    } catch (error) {
        res.status(500).json("No se pudo borrarel usuario", error)
    }
    

}


module.exports = { getUsers, getUserById, createUser, deleteUser, getSaldoByUser};
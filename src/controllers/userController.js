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



const createUser= async (req, res) => {
    try {
        const { nombre, apellido, email, password} = req.body
        const user = User.create ({
            nombre: nombre,
            apellido: apellido,
            email: email,
            password: password
        })
        res.status(204).json("Nuevo usuario creado")
    } catch (error) {
        res.status(500).json("No se pudo crear el usuario", error)
    }
    

}


const deleteUser = async (req, res) => {
    try {
        const idSearch = req.params.id
        const user = await User.destroy( {where: { id: idSearch}});
        res.status(200).json("Usuario borrado")
 
    } catch (error) {
        res.status(500).json("No se pudo borrarel usuario", error)
    }
    

}


module.exports = { getUsers, getUserById, createUser, deleteUser};
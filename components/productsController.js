const Contenedor = require('../../Practica/Desafion2/Class');
const contenedor = new Contenedor('productos.txt')

module.exports = async function productsController(req, res) {
    try {
        const respuesta = await contenedor.getAll()
        res.send(respuesta)
    } catch (e) {
        console.log("Error: ", e)
    }
}
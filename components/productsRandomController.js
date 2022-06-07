const Contenedor = require('../../Practica/Desafion2/Class');
const contenedor = new Contenedor('productos.txt')

module.exports = async function productsRandomController(req, res) {
    try {
        const productos = await contenedor.getAll()
        index = await random(0, (productos.length - 1))
        const productoRandom = productos[index]
        res.send(productoRandom)
    } catch (e) {
        console.log("Error: ", e)
    }
}
const random = async (min, max) => {
    try {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    } catch (e) {
        console.log("Error: ", e)
    }
}
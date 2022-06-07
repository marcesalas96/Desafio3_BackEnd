const express = require('express');
const app = express();
const puerto = 8080;
const productsController = require ('./components/productsController.js')
const productsRandomController = require ('./components/productsRandomController.js')

try{
    app.get('/productosRandom', productsRandomController) 
    app.get('/productos', productsController)

    
    
    app.listen(puerto, () => {
        console.log(`Servidor escuchando en puerto: ${puerto}`)
    })
}catch(e){
    console.log("Error: ", e)
}



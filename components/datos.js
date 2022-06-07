const Contenedor = require('../../Practica/Desafion2/Class');
const contenedor = new Contenedor('productos.txt')

const test = async () => {
    try {
        await contenedor.save({
            id: 1,
            titulo: 'Café Brasil Topazio',
            precio: 1300,
            imagen: 'data:image/jpeg;base64,/9j/='
        })
        await contenedor.save(
            {
                id: 2,
                titulo: 'Cafe Colombia Geisha',
                precio: 2500,
                imagen: 'https://http2.mlstatic.com/D_NQ_NP_656582-MLA49706814378_042022-O.webp'
            }
        )
        await contenedor.save(
            {
                id: 3,
                titulo: 'Cafe Guatemala',
                precio: 1780,
                imagen: 'data:image/jpeg;base64,/9j=='
            }
        )
    }catch(e){
        console.log("Error: ", e)
    }
}
test()
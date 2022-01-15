/*function saludar(x){
    return `hola ${x}`
}
*/
const saludar = (x = 'Pedro') => `hola ${x}`

//const nombre = 'Juan'
//console.log(saludar)

const getUser = () => ({
        nombre: 'Juan',
        apellido: 'Perez',
})

const cosas = [{
    id: 1,
    nombre: 'papas'
}, {
    id: 2,
    nombre: 'manzanas'
}]

const existe = cosas.some((cosas) => cosas.id === 1) 

const existe2 = cosas.find((cosas) => cosas.id === 3)
console.log(existe2)

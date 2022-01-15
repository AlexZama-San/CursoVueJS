/*console.log('inicio')

new Promise(( resolve, reject ) => {
    console.log('cuerpo de la promesa')
    resolve('ok')
    reject('Promesa resuelta con error')
}).then(console.log)
.catch(console.log)

console.log('fin')
*/
import {getHeroeById} from './bases/Imp-exp'

const getHeroByIdAsync= (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const heroe = getHeroeById(id)
        if(!heroe) reject(`No se encontro el heroe con id ${id}`)
        else resolve(heroe)
    }
    , 1000)}
    )
}

getHeroByIdAsync(4).then(h => {
    console.log(`El heroe es: ${h.name}`)
}).catch(console.log)

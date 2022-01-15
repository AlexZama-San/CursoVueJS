import {owners} from '../data/heroes'

/*const [DC, Marvel] = owners;

console.log(DC, Marvel);
*/

import demandas from '../data/heroes'

//const getHeroeById = (id) => {
  //   return demandas.find(heroe => heroe.id === id)
//}
export const getHeroeById = (id) => demandas.find(heroe => heroe.id === id)


//const getHeroesByOwner = (owner) => {
  //  const heroes = [ demandas.filter(heroe => heroe.owner === owner)]
    //return heroes
//}

export const getHeroesByOwner = (owner) => demandas.filter(heroe => heroe.owner === owner)


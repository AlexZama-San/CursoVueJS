const personajes = ['Tanjiro', 'Nezuko', 'Inosuke', 'Zenitsu']

const [T,N,I,Z, Muzan = 'Muerto'] = personajes


console.log (T,N,I,Z, Muzan)

const returnArray = ([P1,P2,P3]) => {
    return [P1,P2,P3]
}

const [A0,A1,A2] = returnArray(personajes)

console.log(A0,A1,A2)
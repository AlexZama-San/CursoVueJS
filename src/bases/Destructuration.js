const person = {
    name: 'John',
    age: 30,
    job: 'developer'
}

//console.log(`nombre: ${name}, edad: ${age}, trabajo: ${job}`)

const crearPersona = ({ name, age, job }) => 
({    
        id: 55564,
        name,
        age,
        job
})


console.log (crearPersona(person))

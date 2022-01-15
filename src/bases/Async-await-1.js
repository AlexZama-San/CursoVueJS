const promesa= () => {
    return new Promise( reject => {
        setTimeout(() => {
            //resolve('promesa resuelta')
            reject('promesa rejeitada')
        }, 1000);
    })
}

const medirtiempoAsync = async () => {

    try{
        console.log('inicio')

const respuesta = await promesa()
console.log(respuesta)

console.log('fim')

return 'fin de medirtiempoAsync'
    }
    catch(error){
        throw 'error'
    }
}

medirtiempoAsync()
//.then(valor => console.log(valor))
.catch(err => console.log(err))
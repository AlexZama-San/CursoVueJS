const nombre = 'Juan';
const apellido = 'Perez';

const nombreCompleto = `${nombre} ${apellido}`;

//console.log(`${3+3}`);

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(`${getSaludo(nombre)}`);
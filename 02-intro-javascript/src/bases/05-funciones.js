

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_papi1502',
})

// console.log(saludar('Goku'));
// console.log( saludar2('vegueta') );
console.log( saludar3('Goku') );



// function getUsuarioActivo( nombre ){
//     return{
//         uid: 'ABC567',
//         username: nombre,
//     }
// };


const getUsuarioActivo = nombre => ({
    uid: 'ABC567',
    username: nombre,
});



const usuarioActivo = getUsuarioActivo('Fernando');

console.log( usuarioActivo);
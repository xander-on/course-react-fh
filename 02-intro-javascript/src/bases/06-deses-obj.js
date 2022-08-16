const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};

const { nombre, edad, clave } = persona;

//asignarle otro nombre a la propiedad
const { nombre:nombre2 } = persona

console.log(nombre);
console.log(nombre2);


//
const useContext = ({ clave, nombre, edad, rango = 'capitan'}) => {
    // console.log( nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        },
    }
}

const {nombreClave, anios, latlng:{lat:latitud, lng}} = useContext( persona );
console.log(nombreClave, anios);
console.log(latitud, lng);
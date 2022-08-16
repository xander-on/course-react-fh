const personajes = ['Goku', 'Vegueta', 'Trunks'];

const [p1] = personajes;
const [ ,p2] = personajes;

console.log(p1);
console.log(p2);

//
const retornaArreglo = () => ['ABC', 123];

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);


//
console.clear()
const useState = ( valor )=>{
    return [valor, ()=>{ console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();

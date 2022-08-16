import heroes from "./data/heroes";

const getHeroByIdAsync = (id)=>{
  
  return new Promise( (resolve, reject) => {
    setTimeout(()=>{

      const personaje = heroes.find( (heroe) => heroe.id === id );
      personaje ? resolve(personaje) : reject('No se pudo encontrar el Heroe');
      
    }, 3000);
  });

}

getHeroByIdAsync(10)
.then( (heroe)=> console.log('Heroe', heroe) )
.catch( (error) => console.warn(error) );







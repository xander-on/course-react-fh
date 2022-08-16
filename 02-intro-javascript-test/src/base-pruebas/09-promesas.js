import heroes from "../data/heroes";

export const getHeroByIdAsync = ( id ) => {
  
  return new Promise( (resolve, reject) => {
    setTimeout(()=>{

      const personaje = heroes.find( (heroe) => heroe.id === id );
      personaje ? resolve(personaje) : reject('No se pudo encontrar el Heroe ' + id);
      
    }, 1000);
  });

}







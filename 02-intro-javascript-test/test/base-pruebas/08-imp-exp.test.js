import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imports';
import dataHeroes from '../../src/data/heroes';


describe('Pruebas en 08-imp-exp', () => {
  test('getHeroById debe retornar un heroe por ID', () => {
    const id = 1;
    const objectTest = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    }

    const hero = getHeroeById(id);
    expect(hero).toEqual( objectTest ) 
  })
  

  test('getHeroeById debe de retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect( hero ).toBeFalsy();
  })
  


  //tarea
  test('getHeroesByOwner debe de regresar heroes de DC', () => {
    
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );
    const heroesOK = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroesOK);

    // filtrando desde el archivo data/personajes
    expect(heroes).toEqual(dataHeroes.filter( (heroe) => heroe.owner === owner ));
  });


  test('getHeroesByOwner debe de regresar heroes de Marvel', () => {
    
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner );

    expect(heroes.length).toBe(2);

    expect(heroes).toEqual(dataHeroes.filter( (heroe) => heroe.owner === owner ));
    console.log(heroes)
  })
  
})

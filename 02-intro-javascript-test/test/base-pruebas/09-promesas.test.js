import { getHeroByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 

  test(' getHeroByIdAsync debe retornar un heroe', ( done ) => {
    const id = 1;
    const heroTest = {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    }

    getHeroByIdAsync( id )
      .then(hero => {
        expect( hero ).toEqual( heroTest );
        done();
      })
  });

  
  test('getHeroByIdAsync debe de obtener un error si heroe no existe', (done) => {
    
    const id = 100;
    getHeroByIdAsync( id )
      .then( hero => {
        expect( hero ).toBeFalsy();
        done();
      })
      .catch( error => {
        expect(error).toBe(`No se pudo encontrar el Heroe ${id}`);
        done();
      });
  })
  
})
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
  test('getUser debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };
    const user = getUser();
    expect( testUser ).toEqual( user );
  });

  test('Deberia retornar otro objeto', () => {
    const name= 'Roxana';
    const testUserActivo = {
      uid: 'ABC567',
      username: name
    };
    const userActivo = getUsuarioActivo(name);
    expect( testUserActivo ).toEqual( userActivo );
  })
});
import { getImage } from '../../src/base-pruebas/11-asynAwait';


describe('Pruebas en 11-async-await.js', () => { 

  test('getImagen debe de retornar un URL de la imagen', async()=>{
    const url = await getImage();
    expect( typeof url ).toBe('string');
  }); 
})
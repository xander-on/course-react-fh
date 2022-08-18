import { render } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  
  // test('debe de hacer match con el snapshot', () => {
  //   const title = 'Hola, Soy Goku'
  //   const { container } = render( <FirstApp title={ title }/> );
    
  //   expect( container ).toMatchSnapshot();
  // });


  test('should mostrar el titulo en el h1', () => { 
    const title = 'Hola, Soy Goku';
    const { container, getByText, getByTestId } = render( <FirstApp title={ title }/> );
    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // //con tobe si tenemos " Hola soy goku " (con espacios inicio final) da error asi solo validamos que contenga el texto con toContain
    // expect(h1.innerHTML).toContain(title);

    expect( getByTestId('test-title').innerHTML ).toContain(title)
  });

  test('should de mostrar el subtitulo enviado por props', () => { 
    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo'
    const { getAllByText } = render( 
      <FirstApp title={ title } subTitle={ subTitle }/> 
    );
    expect( getAllByText(subTitle).length ).toBe(2);
  })
  
});

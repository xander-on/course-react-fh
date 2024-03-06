import { render, screen } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

//una forma de hacer las pruebas de manera mas ordenada

describe('Pruebas en <FirstApp />', () => {
  const title = 'Hola soy Goku';
  const subTitle = 'Soy un subtitle';

  test('should de hacer match con el snapshot', () => {
    const { container } = render( <FirstApp title={ title }/>);
    expect( container ).toMatchSnapshot();
  });

  test('should de mostrar el mensaje "Hola, soy Goku"', () => {
    render( <FirstApp title={ title }/>);
    expect( screen.getByText(title) ).toBeTruthy();
    // screen.debug();
  });

  test('should de mostrar el titulo en un h1', () => {
    render( <FirstApp title={ title }/>);
    expect( screen.getByRole('heading', { level:1 }).innerHTML ).toContain( title );
  });

  test('should de mostar el subtitulo enviado por props', () => { 
    render(
      <FirstApp title={ title } subTitle={ subTitle }/> 
    );

    expect( screen.getAllByText(subTitle).length ).toBe(2);
  });
  
});

import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en el <CounterApp/>', () => {

  const initialValue = 10;

  test('should de hacer match con el snapshot', () => {
    const { container } = render( <CounterApp value={ initialValue }/> );
    expect( container ).toMatchSnapshot(); 
  });

  test('should mostrar el valor inicial de 100 <CounterApp value={100}>', () => {
    render(<CounterApp value={ 100 }/>);
    expect( screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole('heading',{ level:2 }).innerHTML ).toContain('100');
  });

  test('should incrementar con el boton +1', () => {
    render(<CounterApp value={ initialValue }/>); 
    fireEvent.click( screen.getByText('+1') );
    expect( screen.getByText('11') ).toBeTruthy();
  });

  test('should decrementar con el boton -1', () => {
    render(<CounterApp value={ initialValue }/>); 
    fireEvent.click( screen.getByText('-1') );
    expect( screen.getByText('9') ).toBeTruthy();
  });

  test('should funcionar el boton de reset', () => {
    render(<CounterApp value={ initialValue }/>);
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    // fireEvent.click( screen.getByText('Reset') );
    fireEvent.click(screen.getByRole('button',{name: 'btn-reset'} ));
    // screen.debug();
    expect( screen.getByText(initialValue) ).toBeTruthy();

  })
  
});

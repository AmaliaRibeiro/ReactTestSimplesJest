/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => { 

   const title = 'Hola, soy Amalia';
   const subTitle = "No hay solo una forma";
   
   test('debe hacer match con el snapshot', () => {
    
    const { container } = render(<FirstApp title={ title } />);
    expect ( container ).toMatchSnapshot();
   });

   test('Debe mostrar el mensaje "Hola, soy Amalia"', () => {

    render(<FirstApp title = { title } />);
    expect( screen.getByText(title) ).toBeTruthy();

   });

   test('Debe mostrar el titulo en un h1', () => {
     render( <FirstApp title={ title }/>);
     expect (screen.getByRole('heading', {level: 1}).innerHTML).toContain( title );
   });

   test('Debe enviar el subTitulo enviado por la props', () => {

    render (<FirstApp 
    title={ title }
    subTitle= { subTitle }
    />
);

expect( screen.getAllByText(subTitle).lenght).toBe(2);
   })
})
 
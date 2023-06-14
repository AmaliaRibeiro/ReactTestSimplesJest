/** @jest-environment jsdom */
import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en el <CounterApp/>', () => {

    const inicialValue = 10;
    test('debe hacer match con el snapshot', () => {

        const { container } = render (<CounterApp value = {inicialValue}/>)

        expect (container).toMatchSnapshot();
    });

    test('debe mostrar el valor inicial de 100 <CounterApp value={100}', () => {

        render( <CounterApp value={ 100 }/>);
        expect( screen.getByText(100)).toBeTruthy();

       //expect (screen.getByRole('heading', {level: 2}).innerHTML).toContain( '100' );
    });

    test('Debe incrementar el boton +1', () => {

        render(<CounterApp value={inicialValue}/>);
        fireEvent.click( screen.getByText('+1'))
        expect( screen.getByText('11')).toBeTruthy();
    });

    test('Debe decrecrementar el boton -1', () => {

        render(<CounterApp value={inicialValue}/>);
        fireEvent.click( screen.getByText('-1'))
        expect( screen.getByText('9')).toBeTruthy();
    });

    test('Debe funcionar el boton reset', () => {

        render(<CounterApp value ={355}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}))
        expect(screen.getByText(355)).toBeTruthy();
    })
})
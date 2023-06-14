/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    test('Debe mostrar el titulo en un h1', () => {

        const title = "Hola, soy Amalia";
        const { container, getByText, getByTestId } = 
            render( <FirstApp title={ title } />);
            expect(getByText(title)).toBeTruthy();

                expect(getByTestId('test-title').innerHTML ).toContain(title)
    })
})

test('debe mostrar el subtitulo enviado por props', () => {

    const title = 'Hola, soy Amalia';
    const subTitle = "No hay solo una forma";
    const { getAllByText } = render (
        <FirstApp 
          title={ title }
          subTitle= { subTitle }
          />
    );

    expect (getAllByText(subTitle).lenght).toBe(1);

});



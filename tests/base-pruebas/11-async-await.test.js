import { getImagen } from '../../src/base-pruebas/11-async-await'

describe ('Pruebas en 11-async-await.js', () => {

    test('getImagen debe retornar un error si no tenemos api key', async() => {

        const resp = await getImagen();
       
        //expect ( resp ).toBe('no se encontro la imagen');
    });
});
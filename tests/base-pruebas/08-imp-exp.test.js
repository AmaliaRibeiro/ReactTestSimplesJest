import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeId debe retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );
        
        expect ( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC'})
    });

    test('getHeroeId debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id );
        
        expect ( hero ).toBeFalsy()
    });
//tarea
    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        expect ( heroes.length ).toBe( 3 );
        expect ( heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
          //O tambien se puede probar asi 

        expect ( heroes).toEqual ( heroes.filter((heroe) => heroe.owner === owner))
    });

    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect ( heroes.length ).toBe( 2 );
        expect ( heroes).toEqual ( heroes.filter((heroe) => heroe.owner === owner))
    })
})
test(' esta prueba no debe fallar', () => {{

    //if ( 2 == 0) {
      //  throw new Error('No debe dividir entre cero');
    //}
//1. Inicializacion
    const message1 = 'Hola mundo';
//2. estimulo
    const message2 = message1.trim();
//3. Observar el comportamiento... esperado
    expect ( message1 ).toBe( message2 );
}})
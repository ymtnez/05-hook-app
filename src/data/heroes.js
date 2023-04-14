const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


/**
 * Casos:
 * 1-) Exportacion por defecto
 *   export default ['Lolo', 123, true];
 * Nota: NO debe tener el nombre del arreglo pero
 * por eso no gusta mucho pues no es muy explicito
 * y es dificl de leer para miembros del equipo.
 * 2-) Exportacion por defecto
 *   const heroes = ['Lolo', 123, true];
 *   export default heroes; 
 * 3-) Exportacion mixta (una simple y una por default)
 *   export const arrPrueba = ['Lolo', 123, true];
 *   export default heroes;
 * 4-) Exportacion mixta (una simple y una por default)
 *   const heroes = [...]
 *   const arrPrueba = ['Lolo', 123, true];
 *
 *   export {
 *      heroes as default,
 *      arrPrueba,
 *   }
 * 5-) Varias exportaciones simples 
 *   const heroes = [...]
 *   const arrPrueba = ['Lolo', 123, true];
 *
 *   export {
 *      heroes,
 *      arrPrueba,
 *   }
 */

const arrPrueba = ['Lolo', 123, true];

export {
    heroes,
    arrPrueba,
}
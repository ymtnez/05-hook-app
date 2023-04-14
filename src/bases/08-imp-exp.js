/**
 * Para importar archivos .js en nuestro index podemos
 * utilizar import {} from ''; donde import indica que 
 * vamos a importar algo hacia nuestro archivo (en este caso
 * index.js), las llaves indican el contenido que vamos a
 * importar del archivo indicado entre comillas despues del
 * from. Es decir, del archivo heroes.js que esta en /data
 * vamos a importar el arreglo heroes indicado entre las 
 * llaves.
 */

import {heroes, arrPrueba} from '../data/heroes';

/**
 * Se pueden hacer multiples exportaciones y ademas exportaciones
 * por defecto, cada caso estara enlazado numericamente en heroes.js
 * Casos:
 * 1-) Exportacion por defecto
 *      import heroes from './data/heroes';
 * Nota: En esta caso se le quitan las llaves a heroes.
 * 2-) Exportacion por defecto
 *      import heroes from './data/heroes'; 
 * 3-) Exportacion mixta (una simple y una por default)
 *      import heroes, {arrPrueba} from './data/heroes';
 * Nota: En este caso arrPrueba es una exportacion simple y heroes
 * es por default, es por ello que arrPrueba va entre llaves
 * pues es como si estuvieramos desestructurando a herose,js
 * 4-) Exportacion mixta (una simple y una por default)
 *      import heroes, {arrPrueba} from './data/heroes';
 * 5-) Varias exportaciones simples
 *      import {heroes, arrPrueba} from './data/heroes';
 * Nota: En este caso solo hay exportaciones simples y es por
 * ello que ambas va entre llaves pues es como si estuvieramos
 * desestructurando a herose,js
 */

/**
 * Si queremos utilizar las bondades de VSCode podemos
 * escribir la palabra:
 * 1-) imp + Enter
 * 2-) Llenar presionando Tab los valores first y second.
    import second from 'first' -> import {heroes} from './data/heroes';
 * 
 * Otra forma seria escribir el nombre de nuestro archivo
 * heroes y si aparece entonces le damos Enter y el VSCode
 * lo completaria por nosotros quedando asi:
 *    import { heroes } from "./data/heroes";
 */

/**
 * Pero para ver el contenido del arreglo definido en 
 * /data/heroes.js debemos anteponer la palabra reservada:
 * export a la const heroes[...] de lo contrario me saldria
 * undefined.
 */
//console.log(heroes);
// console.log(arrPrueba);

/**
 * La funcion getHeroeById retorna el resultado de la 
 * funcion find en el arreglo heroes. El find recibe una
 * funcion como argumento conocida como callback y en la misma
 * se define un argumento (heroe) en el cual se va a devolver
 * cada uno de los elementos del array en cada iteracion que 
 * haga la funcion callback, es asi como puedo hacer heroe.id
 * La funcion find devuelve el valor del primer elemento del
 * array que cumple la función de prueba proporcionada, en este
 * caso (heroe) => heroe.id === idValue.
 *  
 */
export const getHeroeById = (idValue) => {
  return heroes.find( (heroe) => heroe.id === idValue );
}

//console.log(getHeroeById (2));

/**
 * La funcion getHeroeByOwner retorna el resultado de la 
 * funcion filter en el arreglo heroes. El filter recibe una
 * funcion como argumento conocida como callback y en la misma
 * se define un argumento (heroe1) en el cual se va a devolver
 * cada uno de los elementos del array en cada iteracion que 
 * haga la funcion callback, es asi como puedo hacer heroe.id
 * La funcion filter crea un nuevo array con todos los elementos
 * que cumplan la condición implementada por la función dada.
 */

export const getHeroeByOwner = (ownerValue) => {
  return heroes.filter ( (heroe1) => heroe1.owner === ownerValue );
};

//console.log(getHeroeByOwner ('DC'));

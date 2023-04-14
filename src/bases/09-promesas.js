//Promesas

import {getHeroeById} from './bases/08-imp-exp'

// const promesa = new Promise ( (resolve, reject) => {
//   setTimeout( () => {
//     const my_heroe = getHeroeById (2);
//     //console.log(my_heroe); 

//     /**
//     * Una vez encontrado my_heroe lo mandamos al resolve como argumento,
//     * de esta manera podemos acceder a lo que tenga my_heroe en promesa.then
//     */
//     resolve(my_heroe);
//      /**
//       * Si no encuentra my_heroe entonces utilizamos reject para manejar el 
//       * error. Reject se utiliza cuando la promesa no se cumple. Para ello
//       * debemos utilizar el metodo catch en el then para manejar el error. 
//       */
//      //reject ('No se pudo encontrar el heroe')
//   }, 2000)
  
// });

// promesa.then ( (heroe) =>{
//   console.log('El heroe es:', heroe);
// }).catch ( err => console.warn (err) );

/**
 * De esta forma podemos enviar a la promesa un argumento, es decir, el id
 * del heroe que quiero buscar.
 */
const getHeroeByIdAsync = ( id ) => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
          const my_heroe = getHeroeById (id);
          //console.log(my_heroe); 
      
          /**
          * Una vez encontrado my_heroe lo mandamos al resolve como argumento,
          * de esta manera podemos acceder a lo que tenga my_heroe en promesa.then
          */
        if ( my_heroe )
            resolve(my_heroe);
        else
            reject('No se pudo encontrar el heroe');
           /**
            * Si no encuentra my_heroe entonces utilizamos reject para manejar el 
            * error. Reject se utiliza cuando la promesa no se cumple. Para ello
            * debemos utilizar el metodo catch en el then para manejar el error. 
            */
           //reject ('No se pudo encontrar el heroe')
        }, 2000)
        
      });
}

getHeroeByIdAsync(1)
    .then ( my_heroe => console.log('Mi heroe', my_heroe) )// igual .then ( console.log )
    .catch (console.warn ); // igual .catch (err => console.warn (err)) 

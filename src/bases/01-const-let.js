const nombre    = 'Yohandys';
const apellidos = 'Martinez Navarro';

/*Al utilizar 'let' y 'const' debemos tener presente que son variables scope o 
  de ambientes en particular, es decir que solo el valor de la variable va a 
  cambiar en ambientes diferentes.
*/
let valorDado  = 5;
 /*Si volvemos a poner: let valorDado = 8; o const nombre = 'Pepe' devuelve
   un error pues estamos utilizando la misma variable (let valorDado) o 
   (const nombre = 'Pepe';) en el mismo ambiente. 
   Seria solo poner: valorDado = 8; o nombre = 'Pepe';
 */
valorDado = 88;

console.log(nombre, apellidos, valorDado);

/*let valorDado está en el ambiente del if y por ello sí se puede usar nuevamente
  pero solo dentro del if. Lo mismo le sucede a const nombre
*/
if (true){
    const nombre  = 'Amalia';
    let valorDado = 60;
    
    console.log(nombre, valorDado);
}

console.log(nombre, valorDado);
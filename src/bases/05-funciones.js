//Funciones en JS

/**
 * Las funciones se declaran asi, pueden tener argumentos o no. Pero de esta manera puede que 
 * en alguna parte de nuestro codigo sin darnos cuenta hacemos una asignacion al nombre de 
 * nuestra funcion y apareceran resultados inesperados o no correctos. Como se muestra desde 
 * la linea 9-15. En este caso el programa no daria error, pero no estaria bien.
  
  function saludar (nombre) {
   return `Hola, ${nombre}`;
  };
  
  saludar = 30;
  
  console.log(saludar);

*/
/**
 * Algo mas claro y recomendable seria crear la funcion como una constante y asi si fueramos a
 * realizar una asigancion a saludar nos diera error. Es mas legible y seguro.  
 */
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};
//Hacer esto nos indicara error pues saludar es una constante y ademas una funcion.
//saludar = 20;

console.log(saludar('Amalia'));

/**
 * Pero ademas, la funcion declarada en la linea 20 la podemos reducir y convertirla
 * en una funcion Flecha, Arrow, Lamda, etc. siendo mas legible y facil de leer.
 */
const saludar2 = (apellidos) => {
  return `${saludar("Gloria Amalia")} ${apellidos}`;
};

console.log(saludar2('Martinez De Paula'));

/**
 * Si la funcion flecha solo devuelve un return, es decir todo su cuerpo es un return, entonces
 * se puede simplificar aun mas
 */
const saludar3 = (apellidos1) => `${saludar("Lisandra")} ${apellidos1}`;

console.log(saludar3('De Paula Hernandez'))

/**
 * Tambien podemos utilizar funciones para devolver objetos implicitos en ella. Para ello
 * utilizamos las funciones flecha 
 */

const getUser = () => {
  return {
     id_user: 'asd123',
    username: 'ymtnez',
  }
};

/**
 * Y como solo tiene un return podemos simplificarla, pero OJO en este caso estamos devolviendo
 * un objeto asi que no es solo quitar el return y las llaves, seri asi encerrar todo en parentesis:
 */
const getRol = () => (
  {
      id_rol: '820908',
    name_rol: 'admin',
  }
);

//Pudiera ser de las dos formas, aunque se veria mejor declarando la constante
const user = getUser();
console.log(user);

console.log (getRol());

//Tarea
/*function getUsuarioActivo (nombre){
  return {
    uid: 'ABC567',
    username: nombre,
  }
}

const usuarioActivo = getUsuarioActivo ('Yohandys');
console.log(usuarioActivo);*/

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC890',
    username: nombre,
  });  

const usuarioActivo = getUsuarioActivo ('Yohandys');
console.log(usuarioActivo);

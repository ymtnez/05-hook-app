//Objetos literales
const persona = {
    nombre   : 'Gloria Amalia',
    apellidos: 'Martinez De Paula',
    edad     : 25,
    //Objeto "direccion" dentro de un objeto. Tambien puedo tener funciones
    direccion: {
        ciudad   : 'Pinar del Rio',
        codPostal: 20100,
        activo   : true,
    }
}

/**
* Aquí en realidad estamos haciendo una asignacion de referencia y esto puede
* no ser bueno pues si en algún momento hacemos: persona2.nombre = 'Pedro'; esto 
* cambiará el valor del atributo nombre en el objeto persona. NO debe hacerse.
*/ 
const persona2 = persona;
persona2.nombre = 'Pedro';

console.log(persona);
console.log(persona2);

/**
 * Para lograr hacer una asiganción por valor, o crear un objeto nuevo que tenga
 * los mismos campos (es decir un clone) de persona entonces sería así:
*/
const persona3  = {...persona};
persona3.nombre = 'Lisy';

console.log(persona);
console.log(persona3);

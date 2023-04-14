//Desestructuracion de Arreglos
//Asiganacion Desestructurante de Arreglos

//Definimos el arreglo 'personajes'
const personajes = ['Goku', 'Vegeta', 'Trunks'];

/**
 * Para acceder a cada valor de cada elemento del arreglo
 * lo pudieramos hacer como sigue:
        console.log(personajes[0]);
        console.log(personajes[2]);
        console.log(personajes[2]);
   Pero seria tedioso tener que repetir personajes[...]
   para eso podemos desestructurar el arreglo 
 */

/**
 * Creamos tres constantes las cuales al aplicar la 
 * desestructuracion del arreglo guardamos en ellas los
 * valores. Es importante que en este caso estamos 
 * pidiendo todos los valores.
 */
const [value_pos0, valor_pos1, pepe_lugar2] = personajes;
console.log(value_pos0, valor_pos1, pepe_lugar2);

/**
 * Si quisieramos solo un valor y ademas que fuera en 
 * cualquier posicion, seria:
 */
const [, value_pos1] = personajes;
const [, , lolo_pos2] = personajes;
console.log(value_pos1, lolo_pos2);

//Otro ejemplo seria vinculando funciones
const retornaArreglo = () => {
    return ['ABC', 123];
}

/**
 * Esto es lo tradicional pues en la const arreglo 
 * guardamos lo que devuelve la funcion (que es un arreglo)
 */
const arreglo = retornaArreglo ();
console.log(arreglo);

/**
 * Pero podriamos desestructurar el arreglo que devuelve
 * la funcion y acceder a los valores:
 */
const [letras, numeros] = retornaArreglo ();
console.log(letras, numeros);

//Tarea
const usesState = (valor) => {
  return [valor, () => {console.log(`Hola ${valor}`)}];
};

const arr = usesState ('Goku');
/**
 * Si quisieramos acceder al valor del segundo elemento
 * que es una funcion, entonces hariamos asi:
      arr[1]();  
 */
console.log(arr);

/**
 * En este ejemplo desestructuramos el arregelo que
 * devuelve la funcion usesState ('Yohandys') y el primer
 * valor del arreglo se lo asignamos a la const 'nombre' y
 * el segundo valor que es una funcion se lo asignamos a la
 * constante setNombre.
 */
const [nombre, setNombre] = usesState ('Yohandys');

console.log(nombre);
setNombre();

//Arreglos en JS

/**
 * Esto no esta mal pues en realidad crea el arreglo, solo que no se debe
 * utilizar a menos que queramos crear un arreglo fijo (aunque lo podemos
 * seguir ampliando).
 */
const arreglo = new Array(5);
//Con esto agregamo un elemento mas al arreglo, por lo que tendria ahora 6 elementos
arreglo.push (1);
console.log(arreglo);

/**
 * Esta es la forma recomendada para crear un array
 */
const array_valores = [1,2,3,4];
/**
 * Para llenarlo puede ser con: array_valores.push(1); aunque no es recomendable pues
 * modifica el objeto principal
   for (let i=1; i<=4; i++){
      array_valores.push(i);
    }
 */
console.log(array_valores);

/**
 * Creamos otro arreglo de tipo array_valores y hacemos push para ver que sucede 
 * con los dos arreglos
 */
let array_valores2 = array_valores;
array_valores2.push(5);
/**
 * Al hacer push al array_valores2 vemos que cuando imprimimos en consola tambien
 * fue alterado el array_valores, es decir que asignamos por referencia, Esto puede
 * no ser lo deseado. Para ello lo que debemos utilizar es el spred (...) como en los
 * objetos
 */
console.log(array_valores);
console.log(array_valores2);

/**
 * Clonando el objeto array_valores es la forma correcta pues podemos modificar el 
 * nuevo objeto array_valores3 sin que altere el principal
 */
let array_valores3 = [...array_valores, 6];
console.log(array_valores3);

/**
 * Esto es casi lo mismo que lo anterior pero utilizando la funcion "map" del prototype
 */
const array_valores4 = array_valores3.map(function(valores){
    return valores * 2;
});
console.log(array_valores4);
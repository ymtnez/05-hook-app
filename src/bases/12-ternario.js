//Operador ternario

const activo  = true;

/**
 * Esta es la manera tradicional
    let mensaje = '';

    if (activo) {
        mensaje = 'Activo';
    } else {
        mensaje = 'Inactivo';
    }
*/

/**
 * Esta es la simplificada utilizando el operador ternario. Mensaje va a tener el 
 * valor de: "Esta activo" cuando sea verdadera la condicion evaluada en (activo).
 * Ese valor es el que está despues de ? y si la condicion a evaluar da false 
 * entonces (seria como else y es representado por :) toma el valor "Esta inactivo" 
 *  
 *  let mensaje = (activo) ? 'Esta activo' : 'Esta inactivo';
*/

/**
 * Pero si lo que quisieramos es solo evaluar para cuando es true y que javascript
 * no evalue cuando sea false entonces el operador ternario no nos sirve pues daria
 * error. Lo hariamos asi:
 */
let mensaje = (activo) && 'Esta activo';
console.log(mensaje);
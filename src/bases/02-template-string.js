//Template String ``

const esposa = 'Lisy';
const hija   = 'Amalia';

/* Si queremos imprimir los valores de 'esposa' e 'hija' podemos concatenarlos
   const familia = 'Mi familia es: ' + esposa + ' y ' + hija;
   Pero podemos usar los Templates String  
*/
const familia = `Mi familia es: ${esposa} y ${hija} `;  
console.log(familia);

function getFamilia (nombEsposa, nombHija){
    //Puedo redefinir la constante familia pues estoy en un ambiente (scope) diferente
    const familia = `Esta es mi familia: ${nombEsposa} y ${nombHija}`;
    return `${familia}`;
}

console.log(getFamilia (esposa, hija));
console.log(`${getFamilia(esposa, hija)}`);
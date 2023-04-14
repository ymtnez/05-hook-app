//Desestructuracion de Objetos
//Asiganacion Desestructurante de Objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
};

/**
 console.log(persona.nombre);
 console.log(persona.edad);
 console.log(persona.clave);

 * Para ver todo los valores de los atributos del objeto (persona) pudieramos hacer como se
 * muestra en el console.log pero veremos que repetimos persona varias veces. Una forma de
 * obtener lo mismo y mas elegantemente seria utilizando la Desestructuracion del objeto
 */

const {nombre, clave, edad} = persona;

/**
 * Si tuviera una variable con el mismo nombre que la propiedad "nombre" del 
 * objeto, entonces podria hacer:
    const {nombre:name_heroe, clave, edad} = persona;
 y luego lo llamaria:
    console.log(`Primer avenger: ${name_heroe} ${edad} ${clave}`); 
 * 
 console.log(nombre);
 console.log(edad);
 console.log(clave);
 * 
 */
console.log(`Primer avenger: ${nombre} ${edad} ${clave}`);

//######---Definiendo el objeto persona1---#####
const persona1 = {
    name: 'Gloria A.',
    age: '40',
    range: 'Captain',
}

/**
 * Otra forma seria:
 * 
 *  const retornaPersona1 = (usuario) =>{
 *      const {name, age} = usuario;
 *      console.log(name, age);
 *  }
 *  retornaPersona1(persona1);
 *  
 * Puedo hacer la desestructuracion directamente en el argumento, sin tener
 * que pasar el objeto como argumento y no tendria que hacer:
 const {name, age, pass} = usuario;
 * 
 */

 /**
  * En los argumentos de una funcion podemos pasar valores por defecto, como
  * por ejemplo "pass". Si no está definido en el objeto pass asume el valor
  * qaz123 porque ese valor por defecto, en caso que estuviera definido en el
  * objeto entonces pondria primero el valor que está definido en el objeto.
  */
const retornaPersona1 = ({name, age, pass = 'qaz123'}) => {
    console.log(name, age, pass);     
}

retornaPersona1(persona1);

const marvels = ({name, age, range}) => {
    //console.log(name, age, range);
    return {
        nombPersona1: name,
        agePersona1: age,
        parents: {
            status: 'live',
            mother: {
                nameMother: 'Lisandra',
                ageMother: 36,
            },
            father: {
                nameFather: 'Yohandys',
                ageFather: 40,

            }
        }
    }     
}

const heroes = marvels (persona1);
console.log(heroes);

console.log('##########################################')

//Esto es para poder desestructurar objetos anidados y acceder a "parents"
const {nombPersona1, agePersona1, parents:{mother, father}} = marvels(persona1);
/**
 * Pudiera haber hecho esto:
 const {parents} = marvels(persona1);
 const {mother, father} = parents;
 console.log(mother, father);
 */
console.log(nombPersona1, agePersona1, mother, father);

console.log('#######################################');
//Esto es para poder desestructurar objetos anidados y acceder a objetos dentro del objeto "parents"
const {nombPersona1:namePersona1, agePersona1:edadPersona1, parents:{status, mother:{nameMother, ageMother},
            father:{nameFather,ageFather}}} = heroes;
console.log(namePersona1, edadPersona1, status, nameMother, ageMother, nameFather, ageFather);


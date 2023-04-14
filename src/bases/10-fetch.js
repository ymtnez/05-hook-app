const apiKey = '83i7O10QCBh6UcA8OfZ2Bn9UJPR4f356';

/**
 * El fetch es una promesa y como tal se maneja de la misma manera, por lo
 * que tiene un then, finally y catch. A ella retorna siempre algo.
 */
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/**
 * En este caso peticion es una promesa y puedo accedr a los metodos then, finally
 * y catch. El resultado de fetch lo guardo en respuesta.
 * A su vez el metodo json es en si una promesa
 * 
    peticion.then( (resp) => {
        resp.json().then( (datos_json) => {
            //Aqui desestructuro el objeto data e images para llegar al objeto original
            const {data:{images:{original}}} = datos_json;
            const url = original.url;            
            
            * Primero creo el elemento imagen que en html es una img, luego al atributo
            * src (source) de img le asigno el valor de la constante url (la extraje de
            * la desestructuracion del objeto data {data:{images:{original}}}), finalmente
            * ubicamos imagen (de tipo img en HTML) en el body
            *
        const imagen = document.createElement('img');
        imagen.src = url;
        
        document.body.append(imagen);
        })
    });
*/
/**
 * En el codigo anterior tenemos: resp.json().then( (datos_json) => { ... esto se conoce
 * como promesas encadenadas (es decir promesas que a su vez devuelven una promesa)
 */
peticion
    .then( (resp) => resp.json())//En este caso hacemos un return implicito
    .then( ({data}) => {
        const {url} = data.images.original;

        const imagen = document.createElement('img');
        imagen.src   = url;
        document.body.append(imagen);        
    })
    .catch(err => console.warn('UPssss!!!', err));

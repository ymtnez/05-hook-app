/** * 
 * Puede definirse asi tambien, aunque la podemos simplificar mas pues getImagenPromesa
 * solo tiene un return por lo que podemos convertirla en una funcion con return implicito 
    const getImagenPromesa = () => {
        const promesa = new Promise( (resolve, reject) => {
            resolve('https://jdfsdfjsdlfjd.com');
        })
        
        return promesa;
    }
    const getImagenPromesa = () => new Promise( (resolve, reject) => resolve('https://lolo.papo.com') )
    getImagenPromesa().then(console.log);
    //Puede ser asi tambien
    //getImagenPromesa().then(url => console.log('Esta es la url:', url));
*/

/**
 * Este codigo de ejemplo es una funcion sincrona, es decir no utilizamos promesas, etc.
 * pero lo podemos covertir en una promesa como en el ejemplo siguiente
        const getImagen = () => {
            
            return 'https://popo.lelo.com';
        }

        console.log(getImagen());
*/

/**
 * Al utilizar async convertimos lo que antes fue una funcion sincrona en una promesa.
 * El async puede trabajar solo o independiente y es muy útil cuando queremos que una 
 * funcion devuelva una promesa en su return; pero el await NO (siempre depende de
 * que esté dentro de un async). Al usar await nos permite trabajar todo el codigo 
 * como si fuera sincrono.   
 */
const getImagen = async() => {

    /**
     * fetch es una funcion que devuelve una Promesa que resuelve una <Response> y por
     * ello el codigo se ejucta de manera asincrona. Pero al utilizar await le estamos
     * diciendo al codigo que no ejecute las lineas siquientes hasta que no se ejecute
     * la linea donde esta await. Ejemplo:
     *    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
     *    ???
     * No se va a ejecutar ??? hasta que la promesa que devuelva fetch se ejecute.
     * Otra cosa importante es que para manejar un error en async_await hay que utilizar
     * try y el catch
     * 
    */
   try {
       
        const apiKey = '83i7O10QCBh6UcA8OfZ2Bn9UJPR4f356';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const {url} = data.images.original; //o asi: const url = data.images.original.url;
    
        const imagen = document.createElement('img');
        imagen.src   = url;
        document.body.append(imagen);

    } catch (error) {
        //manejo el error
        console.error('UPss!!!', error); //O console.error(error); 
    }
}

getImagen();

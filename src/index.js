 const getImagen = async() => {

    /**
     * fetch es una funcion que devuelve una Promesa que resuelve una <Response> y por
     * ello el codigo se ejucta de manera asincrona. Pero al utilizar await le estamos
     * diciendo al codigo que no ejecute las lineas siquientes hasta que no se ejecute
     * la linea donde esta await. Ejemplo:
     *    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
     *    ???
     * No se va a ejecutar ??? hasta que la promesa que devuelva fetch se ejecute.
     * Otra cosa importante es que paara manejar un error en async_await hay que utilizar
     * try y el catch
     * 
    */
   try {
       
        const apiKey = '83i7O10QCBh6UcA8OfZ2Bn9UJPR4f356';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
    
        const imagen = document.createElement('img');
        imagen.src   = url;
        document.body.append(imagen);

    } catch (error) {
        //manejo el error
        console.error('UPss!!!', error); //O console.error(error); 
    }
}

getImagen();

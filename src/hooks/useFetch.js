import { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    /**
     * Este hook se utiliza para referenciar un valor que no es necesario
     * para el renderizado. Se deberia definir en el top de mi componente
     */
    const isMounted = useRef( true );

    const [objValues, setObjValues] = useState(
        {
            arrObj: null,
            loading: true,
            error: null   
        }
    );

    useEffect(() => {      
    
        return () => {
            isMounted.current = false;
        }
    }, [])
    

    useEffect( () => {
        //Volvemos a resetear los valores para simular una carga nueva
        setObjValues(
            {
                arrObj: null,
                loading: true,
                error: null    
            }
        )

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                setTimeout(() => {

                    if ( isMounted.current ) {

                        setObjValues(
                            {
                                arrObj: data, //Devuelve un arreglo de un objeto
                                loading: false,
                                error: null
                            }
                        )
                    }    
    
                }, 1000);
            })        

    }, [url]);

    return objValues;

}

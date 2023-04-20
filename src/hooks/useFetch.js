import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [objValues, setObjValues] = useState(
        {
            arrObj: null,
            loading: true,
            error: null   
        }
    );

    useEffect( () => {

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
    
                    setObjValues(
                        {
                            arrObj: data, //Devuelve un arreglo de un objeto
                            loading: false,
                            error: null
                        }
                    )
    
                }, 1500);
            })        

    }, [url]);

    return objValues;

}

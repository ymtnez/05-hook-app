import React, { useState } from 'react'

export const useForm = ( initialSate = {} ) => {
   
    const [values, setValues] = useState( initialSate );

    const handleInputChange = ({ target }) => {
        
        setValues(
            {
                ...values,
                /**
                 * Con esto computamos o cambiamos el nombre de la propiedad del
                 * objeto (nombre o correo) por el que viene de la propiedad name
                 * del target del input. Es decir, si escribi en el input que tiene
                 * como name='correo' entonces target.name es correo y a este le
                 * asignamos el target.value. Si escribi en el input del nombre
                 * entonces en target.name sera nombre y su valor lo que venga
                 * en target.value. 
                 */
                [target.name]: target.value
            }
        );

    };

    return [ values, handleInputChange ];

}

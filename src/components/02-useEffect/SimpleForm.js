import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            nombre: '',
            correo: ''
        }
    );

    const { nombre, correo } = formState;
    
    /**
     * Se recomienda que los efectos los utilicemos de manera individual para
     * cada cosa que cambie, ejemplo: los estados, el formulario, etc.
     */
    useEffect(() => {
        // console.log('Primer cambio');    
    }, []);

    //Este efecto se disparara cuando cambie el formulario
    useEffect(() => {
        // console.log('Cambio el form');    
    }, [ formState ]);

    //Este efecto se disparara cuando cambie el correo en el formulario
    useEffect(() => {
        // console.log('Cambio el correo');    
    }, [ correo ]);

    const handleInputChange = ({ target }) => {
        
        setFormState(
            {
                ...formState,
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

    return (
        <>
            <h1>useEffect</h1> 
            <hr />
            <div className='form-group'>
                <input 
                    type='text'
                    name='nombre'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ nombre }
                    onChange={ handleInputChange }
                />
            </div>  
            <div className='form-group'>
                <input 
                    type='text'
                    name='correo'
                    className='form-control'
                    placeholder='correo@algo.com'
                    autoComplete='off'
                    value={ correo }
                    onChange={ handleInputChange }
                />
            </div> 

            { ( nombre === '123' ) && <Message /> }
        </>
    );
};

import React, { useEffect, useState } from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            nombre: '',
            correo: ''
        }
    );

    const { nombre, correo } = formState;

    useEffect(() => {
        console.log('first');    
    }, [])

    const handleInputChange = ({ target }) => {
        console.log( target )
        setFormState(
            {
                ...formState,
                /**
                 * Con esto computamos o cambiamos el nombre de la propiedad
                 * por lo que venga en el target.value es decir, si en el value
                 * viene
                 * 
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
        </>
    );
};

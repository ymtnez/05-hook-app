import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm(
        {
            nombre: '',
            pass: '',
            correo: ''
        }
    );

    const { nombre, pass, correo } = formValues; 
    
    useEffect(() => {
    
        console.log('Cambió el correo')

    }, [ correo ]);

    const handleSubmit = ( evento ) => {

        evento.preventDefault();
        console.log(formValues);

    };   

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1> 
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
            <div className='form-group'>
                <input 
                    type='password'
                    name='pass'
                    className='form-control'
                    placeholder='****'
                    autoComplete='off'
                    value={ pass }
                    onChange={ handleInputChange }
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>
        </form>
    );
};

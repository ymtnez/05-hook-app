import React, { useRef } from 'react'

import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    /**
     * Este hook es para mantener una referencia mutable y devulve un objeto.
     * Con el podemos cambiar a lo que apunta el inputRef sin necesidad de
     * renderizar nuevamente algun componente o en la parte de React
     */
    const inputRef = useRef();
    
    const handleClick = () => {
        
        /**
         * Como solo hay un input entonces no usamos querySelector('#input')
         * .focus() es lo mismo que .select() solo que con este ultimo ademas
         * de poner el foco en el input seleccionamos el contenido
         * 
         *       document.querySelector('input').select();
        */

        // Esto seria lo mismo usando el hook useRef
        inputRef.current.select();

    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={ inputRef }
                className='form-control'
                placeholder='Su nombre'
            />

            <button 
                className='btn btn-outline-primary mt-2'
                onClick={ handleClick }
            >
                Focus  
            </button>
        </div>
    )
}

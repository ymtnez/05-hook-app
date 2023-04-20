import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

export const RealExampleRef = () => {

    const [ show, setShow ] = useState( false );

    const handleClick = () => {
        setShow(!show); //Para alternar entre true y false
    };
    
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button
                className='btn btn-outline-primary mt-2'
                // Pudiera ser: 
                //     onClick={ () => {
                //         setShow(!show);
                //     }} 
                onClick={ handleClick }
            >
                Mostrar/Ocultar
            </button>
        </div>
    )
}

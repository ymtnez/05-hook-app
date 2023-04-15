import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';


export const CounterWithCustomHook = () => {

    /**
     * La funcion useCounter recibe un argumento pero como por defecto
     * en la definicion de la funcion tiene el valor de 10 entonces no es
     * necesario pasarle un parametro, aunque pudiesemos hacerlo:
     *  const { state, increment, decrement } = useCounter( 100 );
     */
    const { state, increment, decrement, reset } = useCounter( 100 );

    return (
        <>
            <h1>Counter with Hook: { state } </h1>
            <hr />

            <button 
                className='btn btn-primary'
                onClick={ increment } 
            > + 1 </button> 

            <button 
                className='btn btn-primary'
                onClick={ reset }
            > Reset </button>  

            <button
                className='btn btn-primary'
                onClick={
                    () => decrement( 2 )
                }
            > - 2 </button>
        </>
    )
}

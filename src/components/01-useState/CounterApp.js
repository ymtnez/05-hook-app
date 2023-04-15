import React, { useState } from 'react'
import './counter.css';

export const CounterApp = () => {

    /**
     * En este hook (useState) podemos desestructurar el objeto
        const [{ counter1, counter2 }, setCounter] = useState(
            {
                counter1: 10,
                counter2: 20,
                counter3: 30,
                counter4: 40,
            }
        );
     * Y luego llamariamos a las propiedades directamente, por ejemplo:
        onClick={ () => {
            setCounter(
                {
                    counter1: counter1 + 1,
                    counter2: counter2
                } 
            );
        }}
     * Pero tendriamos un problema pues se perderian counter3 y counter4
     * porque en el setCounter solo estamos cambiando el estado a counter1 y
     * counter2. Para poder cambiar el estado de uno de los atributos,
     * que seria lo mismo decir: cambiar el valor de un atributo del objeto
     * y mantener el estado de los demas sin perderlos entonces se utiliza
     * el operador spread (...) para espcificarle al hook que mantenga el
     * estado inicial de los demas elementos. Para ello cambiamos la
     * desestructuracion por state. 
     * 
     */
    const [state, setState] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30,
            counter4: 40,
        }
    );

    const {counter1, counter2} = state;

    return (
        <>
            <h1>Counter1 { counter1 } </h1>
            <h1>Counter2 { counter2 } </h1>
            <hr />
            <button 
                className='btn btn-primary' 
                onClick={ () => {
                    setState(
                        {    
//Crea una copia de los valores del estado anterior y los pasa al nuevo estado                        
                            ...state,
                            counter1: counter1 + 1,
                        } 
                    );
                }}
            >
                1 +
            </button>
        </>
    )
}

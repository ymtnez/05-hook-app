import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import './multCustHook.css'

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter( 1 );

    const urlApi   = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;
    const {arrObj, error, loading} = useFetch( urlApi );

    /**
     * Con esta forma elegante estamos validando que solo podremos
     * desestructurar quote y author ( { quote, author } ) cuando arrObj 
     * sea distinto de null (que es el primer valor que tomara antes de 
     * ejecutar el fetch de la promesa), pues hacemos una doble negacion
     * !!arrObj.
     * Cuando arrObj es null, !arrObj da true, !!arrObj daria false
     * Cuando se ejecute la promesa si arrObj trae el arreglo, entonces
     * !!arrObj daria true (!arrObj da false y !!arrObj daria true).
     */
    //const { quote, author } = !!arrObj && arrObj[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                ( !loading ) && 
                    (
                        <div className='alert alert-success text-center'>
                            Completado...
                        </div>
                    )
            }
           
            {
                ( loading )
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Cargando...
                        </div>
                    )
                :
                    (

                        arrObj.map( (objeto, index) =>{

                            const { quote, author } = objeto;

                            return ( 

                                <blockquote key={ index } className='blockquote float-end'>
                                    <p key={ 'p'+index } className='mb-3'> { quote } </p>
                                    <footer key={ 'foot'+index } className='blockquote-footer'>
                                        Frase de:
                                        <cite title={ author }> { author } </cite>
                                    </footer>
                                </blockquote> 

                            )

                        })
                        
                    )
            }
            
            <button 
                className='btn btn-primary'
                onClick={ increment }
            >
                Mas quotes
            </button>
            <button disabled={ (counter <=1) }
                className='btn btn-primary'
                onClick={ () => decrement(1) }
            >
                Menos quotes
            </button>            

        </div>
    )
}

import React from 'react'
import { useFetch } from '../../hooks/useFetch'

import './multCustHook.css'

export const MultipleCustomHooks = () => {

    const urlApi   = `https://api.breakingbadquotes.xyz/v1/quotes/`;
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
    const { quote, author } = !!arrObj && arrObj[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

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
                        <>                        
                            <div className='alert alert-success text-center'>
                                Completado...    
                            </div>
                            <blockquote className='blockquote float-end'>
                                <p> { quote } </p>
                                <footer className='blockquote-footer'>
                                    Frase de:
                                    <cite title={ author }> { author } </cite>
                                </footer>
                            </blockquote>
                        </>
                    )
            }

        </div>
    )
}

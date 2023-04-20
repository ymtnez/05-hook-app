import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState) //10
    
    const increment = () => setCounter( counter + 1 );
    //Pudiera haber pasado factor con valor por defecto (factor = 2)
    const reset = () => setCounter( initialState );
    const decrement = ( factor ) => setCounter( counter - factor );

    return {
        counter,
        increment,
        decrement,
        reset
    };

};

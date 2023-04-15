import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {
    
    const [state, setState] = useState(initialState) //10
    
    const increment = () => setState( state + 1 );
    //Pudiera haber pasado factor con valor por defecto (factor = 2)
    const reset = () => setState( initialState );
    const decrement = ( factor ) => setState( state - factor );

    return {
        state,
        increment,
        decrement,
        reset
    };

};

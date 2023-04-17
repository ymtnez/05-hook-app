import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coors, setCoors] = useState({
        x: 0,
        y: 0
    })
 
    const { x, y } = coors;

    useEffect(() => {

        const mouseMove = ( evento ) => {
            setCoors(
                {
                    x: evento.x,
                    y: evento.y
                }
            )
        };

        window.addEventListener('mousemove', mouseMove);

    //Esta parte de return es para limpiar o parar el efecto
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);   

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                Coordenadas del mouse: x: { x } y: { y }
                
            </p>
                { ( x === y ) && 'Forme un cuadrado' }   
        </div>
    );
};

import { useState, useEffect } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    const onMouseMove = ( {x,y} ) => setCoords( {x, y} );
    // const onMouseMove = ( event ) => console.log(event.x, event.clientX);


    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])
    

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify( coords )}
        </>
    );
}

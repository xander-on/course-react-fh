import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ author, quote }) => {

    const pRef = useRef();
    const [ boxSize, setBoxSize ] = useState( {width:0, height:0} );

    useLayoutEffect(() => {
        const { width, height } = ( pRef.current.getBoundingClientRect());
        setBoxSize({ width, height });
    }, [quote]);

    return (
        <>
            <blockquote className="blockquote text-end d-flex">
                <p 
                    ref       ={pRef} 
                    className ="mb-2" 
                    style     ={{border: '1px dashed red'}}
                >{ quote }</p>

                <footer className="blockquote-footer d-block">{ author }</footer>
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    );
}

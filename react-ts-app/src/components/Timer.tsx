import { useEffect, useRef, useState } from "react";

type TimerArgs = {
    milliseconds: number
}

export const Timer = ( { milliseconds }:TimerArgs ) => {
    const [seconds, setSeconds] = useState(1);  
    const [timer, setTimer] = useState(0);
    const ref = useRef<NodeJS.Timer>();

    useEffect(() => {
        setSeconds(1);
        const intervalId = setInterval( () => {
            setSeconds( s => s + 1 );
        }, 1000 );
        return () => clearInterval(intervalId)
    }, [ milliseconds, timer ]);

    useEffect(() => {
        ref.current && clearInterval( ref.current );
        ref.current = setInterval( () =>  setTimer( s => s + 1 ), milliseconds );
    }, [milliseconds]);

    return (
        <>
            <h4>
                Seconds: <small>{seconds}</small>
                /
                Timer: <small>{timer}</small>
            </h4>
        </>
    );
}

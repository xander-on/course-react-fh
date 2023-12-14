import { useState } from "react";
import { Timer } from "./Timer";



export const TimerPadre = () => {

    const [milliseconds, setMilliseconds] = useState(1000);

    return (
        <>
            <div className="mt-5">

                <span>Miliseconds{ milliseconds }</span>
                <br />

                <button 
                    className="btn btn-outline-primary"
                    onClick={ () => setMilliseconds(1000) }
                >
                    1000 ms
                </button>

                <button 
                    className="btn btn-outline-primary"
                    onClick={ () => setMilliseconds(2000) }
                >
                    2000 ms
                </button>

                <button 
                    className="btn btn-outline-primary"
                    onClick={ () => setMilliseconds(5000) }
                >
                    5000 ms
                </button>

                <Timer milliseconds={ milliseconds }/>

            </div>
        </>
    );
}

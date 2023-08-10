import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const Layout = () => {

    const {counter, increment, reset} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    // console.log( {data, isLoading, hasError} );
    const {author, quote} = !!data && data[0];
    
    return (
        <>
            <h1>BreakingBad Quotes #{counter}</h1>
            <hr />
            <div style={{minHeight: "120px", display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
                {
                    isLoading
                        ? <LoadingQuote/>
                        : <Quote author={author} quote={quote}/>
                }
            </div>
            
            
            <button 
                className="btn btn-primary" 
                disabled = {isLoading}
                onClick={ counter!=30? ()=> increment(): ()=> reset()}
            >
            Next Quote
            </button>
        </>
    );
}

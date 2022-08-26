import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

  const {counter, increment, reset} = useCounter(1);
  const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  // console.log( {data, isLoading, hasError} );
  const {author, quote} = !!data && data[0];
  
  return (
    <>
      <h1>BreakingBad Quotes #{counter}</h1>
      <hr />
      <div style={{minHeight: "110px"}}>
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
  )
}

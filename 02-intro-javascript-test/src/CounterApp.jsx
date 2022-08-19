import { useState } from "react";
import PropTypes from "prop-types"

export const CounterApp =({value}) => {
  
  const [counter, setCounter] = useState(0);

  const handleAdd = () => setCounter(counter+1);

  const handleSubtract = () => counter > 0 && setCounter(counter-1);

  const handleReset = () => setCounter(0);
    
  return(
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>+1</button>
    </>
    
  );
}


CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}
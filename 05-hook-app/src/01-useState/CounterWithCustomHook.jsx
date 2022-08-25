import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

  const value = 17;
  const {counter, increment, decrement, reset} = useCounter(value);
  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={ ()=>decrement(value) }>-{value}</button>
      <button className="btn btn-primary" onClick={ reset }>Reset</button>
      <button className="btn btn-primary" onClick={ ()=>increment(value) }>+{value}</button>
    </>
  )
}

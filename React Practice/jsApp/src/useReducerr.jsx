import React, { useReducer } from "react";

function fun(value, action) {
  switch (action.type) {
    case "I":
      return value + 1;

    case "D":
      return value - 1
    default:
     return  value
  }
}

function useReducerr() {
  
  const value = 0;
  const [count, setCount] = useReducer(fun, value)
  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount({ type: "I" })}>
        + Plus
      </button>

      <button onClick={() => setCount({ type: "D" })}>
        - Minus
      </button>
    </div>
  );
}

export default useReducerr;

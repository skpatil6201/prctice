import React ,{useState,useMemo} from 'react'

export default function Memo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

//   const squared = number * number; 

const squared = useMemo(() => {
  console.log("Calculating...");
  return number * number;
}, [number]);


  return (
    <>
    {/* dwqswd */}
      <h1>{squared}</h1>
<h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

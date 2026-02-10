// import React, { useState, useEffect, useContext } from "react";
// import { ThemeContext } from "../ThemeContext";
// function hooks() {

//     // const [value, setValue] = useState(0)
//     // const [data, setData] = useState()
// const [ valuee,setValue] = useContext(ThemeContext)

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {

//     //             const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//     //             const data =await res.json()
//     //             setData(data)

//     //         } catch (error) {

//     //         }

//     //     }
//     //     fetchData()
//     // }, [])
//     // console.log("data ",data)


//     return (
//         <>
//             <h1>our value is</h1>
//             <h1>{valuee}</h1>
//             <button onClick={() => setValue(valuee + 1)} style={{ border: "solid 6px red " }}>Submit</button>
//         </>
//     )
// }

// export default hooks;

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Child: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Child must be used within ThemeProvider");
  }

  const { theme, setTheme } = context;

  return (
    <div>
      <p>Current Theme: {theme}</p>

      <button onClick={() => setTheme("dark")}>
        Change to Dark
      </button>
    </div>
  );
};

export default Child;

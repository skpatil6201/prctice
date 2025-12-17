import React from "react";

interface DemoProps {
    name?: string;
}
export default function demo(props: any) {
console.log(props.name);
    return(
    <>
    <h2>data come form chirld is {props}</h2>
    <button onClick={()=>props("sent from parent to the chielsd")}></button>
    </>
    
)
}
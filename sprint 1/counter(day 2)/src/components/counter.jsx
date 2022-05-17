import { useState } from "react";

export const Counter = () => {
    const [count,setCount]=useState(0);


  return (
    <>
      <h3 style={(count%2===0)?{color:"red"}:{color:"green"}}>counter:{count}</h3>
      <button onClick={() => {setCount(count+1)}}>inc</button>
      <button onClick={() => {setCount(count-1)}}>dec</button>
      <button onClick={() => {setCount(count*2)}}>double</button>
    </>
  );
};

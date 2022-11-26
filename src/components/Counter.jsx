import React, { useState } from "react";

const Counter = function(){
    const [count, setCount] = useState(0);

    function Increment(){
        setCount(count+1);
        console.log(count);
      };
    
      function Decrement(){
        setCount(count-1);
        console.log(count);
      };

    return(
        <div>
             <h1>{count}</h1>
            <button onClick ={Increment}> Increment </button>
            <button onClick ={Decrement}> Decrement </button>
        </div>
    )
};

export default Counter;
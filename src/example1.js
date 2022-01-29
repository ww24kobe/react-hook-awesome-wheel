import React, { useState } from 'react';

function Example(){
    let [count,setCount] = useState(0)
   
    // function updCount(){
    //     setCount(count+1)
    //     setCount(count+1)
    //     setCount(count+1)
    // }

    function updCount(){
        setCount((preCount)=>{
            return preCount + 1; 
        })
        setCount((preCount)=>{
            return preCount + 1; 
        })
        setCount((preCount)=>{
            return preCount + 1; 
        })
        
    }

    return (
        <div>
            <div>count:{count}</div>
            <button onClick={ () => setCount(count+1) }>incCount</button>
            <button onClick={ () => updCount() }>incCount2</button>
        </div>
    )
}

export default Example
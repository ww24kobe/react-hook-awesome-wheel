import React, { useState, useEffect } from 'react';
import axios from 'axios'


function Example(){
    let [count,setCount] = useState(0)
    let [lunbo,setLunbo] = useState([])

    // 初始化操作
    async function fetchLunboApi(){
        let {data} = await axios.get('http://api.w0824.com/api/getlunbo')
        setLunbo(data.message)
    }
    useEffect(()=>{
        fetchLunboApi()
    },[])
   
    return (
            <div>
                <h2>hello useEffect</h2>
                <div>count:{count}</div>
                <div>轮播图个数：{lunbo.length}</div>
                <button onClick={ () => setCount(count+1) }>incCount</button> 
            </div>
    )
}

export default Example
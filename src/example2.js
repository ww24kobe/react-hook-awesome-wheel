import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Route,Routes} from "react-router-dom"


const My = () => <h3>My 页面</h3>
const Cart = () => {
    useEffect(()=>{
        console.log('cart DOM渲染完毕后执行副作用')
        return ()=>{
            // 组件卸载，清除定时器、解绑事件,取消订阅等...
            console.log('cart组件卸载')
        }
    },[])
    return <h3>Cart 页面</h3>
}

function Example(){
    let [count,setCount] = useState(0)
   
    return (
        <Router>
            <div>
                <h2>hello useEffect</h2>
                <div>count:{count}</div>
                <button onClick={ () => setCount(count+1) }>incCount</button> 
                <br />
                <Link to="/my">我的</Link>
                <Link to="/cart">购物车</Link>
                <Routes>
                    <Route exact path="/my" element={ <My />} />
                    <Route exact path="/cart" element={ <Cart />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Example
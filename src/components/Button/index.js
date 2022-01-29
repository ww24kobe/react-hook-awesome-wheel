import React  from 'react';
import classNames from "classnames"

import "./index.css"

function Button(props){
    let {type='default',children,block,disabled,onClick = ()=>{  }} = props;
    console.log(props);
    const prefix = "btn-"
    const className = classNames([
        'btn',
        `${prefix}${type}`,
        {
            [`${prefix}block`]:block,
            [`${prefix}disabled`]:disabled,
        }
    ])
    return (
        <button  className={className} onClick={(e) => onClick(e)}>{children?children:'默认'}</button>
    )
}

export default Button 

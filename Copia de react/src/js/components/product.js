import React from 'react';

function Product(props){
    return(
        <li className="Product">
            {props.name} <a href="`https://twiter.com/${props.twiter}`">{props.twiter}</a>
        </li>
    )
}

export default Product
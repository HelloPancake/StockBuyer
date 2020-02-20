import React from 'react';

const TotalPrice = (props) => {
    let totalPrice = null;
    if (props.stock && props.stockPrice){
        totalPrice = <div>total order: {(props.shares * props.stockPrice).toFixed(2)}</div>
    }
    else{
        totalPrice = null
    }

    return(
        <>{totalPrice}</>
    )
}

export default TotalPrice
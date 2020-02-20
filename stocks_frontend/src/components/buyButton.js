import React from 'react';

const BuyButton = (props) => {
    let button = null;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props.stockPrice)
        console.log(props.shares)
        console.log(props.stock)
    }

    if (props.stockPrice && props.shares){
        button = <button onClick={handleSubmit}>Order</button>
    }
    else{
        button = null
    }

    return(
        <div>{button}</div>
    )
}

export default BuyButton
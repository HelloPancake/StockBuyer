import React from 'react';

const BuyButton = (props) => {
    let button = null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        let price = props.stockPrice;
        let shares = props.shares;
        let stock = props.stock;
        let transaction = {price, shares, stock}
        let response = await fetch("http://localhost3001/transactions", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ transaction }) 
        })

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
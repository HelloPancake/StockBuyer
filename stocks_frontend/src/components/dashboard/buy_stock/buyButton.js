import React from 'react';

const BuyButton = (props) => {
    let button = null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        let price = props.stockPrice;
        let shares = props.shares;
        let stock = props.stock;
        let user = props.currentUser
        let companyName = props.companyName
        let transaction = {price, shares, stock, user, companyName}
        console.log(transaction)
        let response = await fetch("/dashboard/transactions", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ transaction }) 
        })

        let res = await response.json()
        props.changeShares(0)
        props.changeStock("")
        props.replaceUser(res.user)
    }

    if (props.stockPrice && props.shares){
        button = <button className="ui primary blue button" onClick={handleSubmit}>Purchase</button>
    }
    else{
        button = <button className="ui disabled button">
                    Purchase
                 </button>
    }

    return(
        <div>{button}</div>
    )
}

export default BuyButton
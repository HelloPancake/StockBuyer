import React from 'react';

const TotalPrice = (props) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let totalPrice = null;
    let buyStock = null;
    let stockPrice = null;
    let companyName = null;

    if (props.stock && props.stockPrice){
        totalPrice = <h4 className="ui header" id="specialheaders">total order: {formatter.format((props.shares * props.stockPrice))}</h4>
    }
    else{
        totalPrice = null
    }
    if (props.buyStock ){
        buyStock = <h4 className="ui header" id="specialheaders">{props.buyStock}</h4>
    }
    else{
        buyStock = null
    }
    if (props.stockPrice){
        stockPrice = <h4 className="ui header" id="headers">stock price: {formatter.format(props.stockPrice)}</h4>
    }
    else{
        stockPrice = null
    }
    if (props.buyCompany){
        companyName = <h2 className="ui header" id="headers">{props.buyCompany}</h2>
    }
    else{
        companyName = null
    }

    return(
        <>
             {companyName}
             {buyStock} 
             {stockPrice} 
             {totalPrice} 
        </>
    )
}

export default TotalPrice
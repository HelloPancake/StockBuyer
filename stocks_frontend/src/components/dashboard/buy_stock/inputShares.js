import React from 'react';

const InputShares = (props) => {
    let shares;

    if (props.stockPrice && props.stock){
        shares = <div>quanity: <input type="number" value={props.shares} onChange={props.handleShares} /></div>
    }
    else {
        shares = null
    }
    return(
       <>{shares}</>
    )
}

export default InputShares;
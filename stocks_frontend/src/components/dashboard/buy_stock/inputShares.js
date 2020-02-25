import React from 'react';

const InputShares = (props) => {
    let shares;

    if (props.stockPrice && props.stock){
        shares = <div className="field">
            <label>number of shares</label>
            <div className="ui input">
                <input type="number" value={props.shares} onChange={props.handleShares} />
            </div>
        </div>
        
    }
    else {
        shares = <div className="field">
                <label>number of shares</label>
                <div className="ui disabled input"> 
                <input type="number" value={props.shares} onChange={props.handleShares}/> 
                </div>
        </div>
        
    }
    return(
       <>{shares}</>
    )
}

export default InputShares;
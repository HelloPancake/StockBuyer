import React, {useState} from 'react';
import BuyButton from './buyButton';
import TotalPrice from './totalPrice';
import PingApi from './pingApi';
import InputShares from './inputShares';

const StockSearch = (props) => {
    const [stock, changeStock] = useState("")
    const [stockPrice, changeStockPrice] = useState("")
    const [buyStock, changeBuyStock] = useState("")
    const [buyCompany, changeBuyCompany] = useState("")
    const [shares, changeShares] = useState(0)
    const [notification, changeNotification] = useState([])


    let response = null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        let stockInfo = await PingApi(stock);
        changeStockPrice(stockInfo.latestPrice);
        changeBuyStock(stockInfo.symbol);
        changeBuyCompany(stockInfo.companyName);
    }

    const handleShares = (e) => {
        changeShares(e.target.value)
    }

    const handleChange = (e) =>{
        changeStock(e.target.value)
    }

    if (notification.length !== 0) {
        if (notification[0] === 200){
            response = <div className="ui tertiary green inverted segment">
                        <i className="check circle outline icon"></i>
                        {notification[1]}
                        </div>
        }
        else if(notification[0] === 400){
            response = <div className="ui tertiary red inverted segment">
                        <i className="exclamation icon"></i>
                        {notification[1]}
                        </div>
        }
    }
    else {
        response = null
    }
    // console.log(response)





    return(
        <div>
            {buyStock}
            {stockPrice}
            <TotalPrice shares={shares} stockPrice={stockPrice} stock={buyStock} />


            <form onSubmit={handleSubmit} className="ui form">
            <InputShares handleShares={handleShares} stockPrice={stockPrice} stock={buyStock} shares={shares}/>
                <div className="field">
                    <label>stock symbol:</label>
                    <input type="text" value={stock} onChange={handleChange}/>
                </div>
                
                <button type="submit" value="Submit" className="ui left floated green button"> Look Up </button>
                <BuyButton changeNotification={changeNotification} changeShares = {changeShares} changeStock={changeStock} shares={shares} stockPrice={stockPrice} stock={buyStock} currentUser={props.currentUser} replaceUser={props.replaceUser} companyName={buyCompany}/>
                
                {response}

            </form>

        </div>
    )
}

export default StockSearch;
import React, {useState} from 'react';
import BuyButton from './buyButton';
import TotalPrice from './totalPrice';
import PingApi from './pingApi';
import InputShares from './inputShares';

const StockSearch = (props) => {
    const [stock, changeStock] = useState("")
    const [stockPrice, changeStockPrice] = useState("")
    const [buyStock, changeBuyStock] = useState("")
    const [shares, changeShares] = useState(0)

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let stockInfo = await PingApi(stock);
        changeStockPrice(stockInfo.latestPrice);
        changeBuyStock(stockInfo.companyName);
        changeStock("")
        changeShares(0)
    }

    const handleShares = (e) => {
        changeShares(e.target.value)
    }

    const handleChange = (e) =>{
        changeStock(e.target.value)
    }

    return(
        <div>
            
            {buyStock}
            {stockPrice}
            <TotalPrice shares={shares} stockPrice={stockPrice} stock={buyStock} />

            <InputShares handleShares={handleShares} stockPrice={stockPrice} stock={buyStock} shares={shares}/>
            <form onSubmit={handleSubmit} className="ui form">
                <div className="field">
                    <label>stock symbol:</label>
                    <input type="text" value={stock} onChange={handleChange}/>
                </div>
                
                <button type="submit" value="Submit" className="ui green button"> look up </button>
            </form>
            <BuyButton shares={shares} stockPrice={stockPrice} stock={buyStock}/>
        </div>
    )
}

export default StockSearch;
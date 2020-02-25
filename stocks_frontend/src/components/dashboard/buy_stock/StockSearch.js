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
    const [status, changeStatus] = useState("")

    
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
                <BuyButton changeShares = {changeShares} changeStock={changeStock} shares={shares} stockPrice={stockPrice} stock={buyStock} currentUser={props.currentUser} replaceUser={props.replaceUser} companyName={buyCompany}/>
                
                {/* <div class="ui placeholder segment">
                    hello
                </div> */}





            </form>

        </div>
    )
}

export default StockSearch;
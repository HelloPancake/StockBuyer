import React from 'react'
import PingApi from '../buy_stock/pingApi';

const getCurrPriceDivs = async (portfolioHash) => {
    let currPriceObj = {}

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    for (let stock in portfolioHash) {
        let res = await PingApi(stock)

        let openPrice = res.previousClose
        let currPrice = res.latestPrice
        let currPriceDiv = null

        if (currPrice > openPrice) {
            currPriceDiv = <td id="text">
                    <div className="content" style={{ color: "green" }}>
                        {formatter.format(currPrice)}
                        <div className="sub header" style={{ color: "grey", fontSize: "9pt"  }}>
                        open: {formatter.format(openPrice)}
                        </div>
                    </div>
            </td>
            
        }
        else if (currPrice < openPrice) {
            currPriceDiv = <td id="text">
                <div className="content" style={{ color: "red" }}>
                    {formatter.format(currPrice)}
                    <div className="sub header" style={{ color: "grey", fontSize: "9pt" }}>
                        open: {formatter.format(openPrice)}
                    </div>
                </div>
            </td>

        }
        else {
            currPriceDiv = <td id="text">
                <div className="content" style={{ color: "grey" }}>
                    {formatter.format(currPrice)}
                    <div className="sub header" style={{ color: "grey", fontSize: "9pt"  }}>
                        open: {formatter.format(openPrice)}
                    </div>
                </div>
            </td>
                    }

        currPriceObj[stock] = [currPriceDiv, <td id="text">
            {formatter.format((portfolioHash[stock][0] * res.latestPrice))}
        </td>]
    }

    return currPriceObj
}

export default getCurrPriceDivs;
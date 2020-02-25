import React from 'react'
import PingApi from '../buy_stock/pingApi';

const getCurrPriceDivs = async (portfolioHash) => {
    let currPriceObj = {}

    for (let stock in portfolioHash) {
        let res = await PingApi(stock)

        let openPrice = res.previousClose
        let currPrice = res.latestPrice
        let currPriceDiv = null

        if (currPrice > openPrice) {
            currPriceDiv = <td id="text" style={{ color: "green" }}>${currPrice}</td>
        }
        else if (currPrice < openPrice) {
            currPriceDiv = <td id="text" style={{ color: "red" }}>${currPrice}</td>
        }
        else {
            currPriceDiv = <td id="text" style={{ color: "grey" }}>${currPrice}</td>
        }

        currPriceObj[stock] = [currPriceDiv, <td id="text">
            ${(portfolioHash[stock][0] * res.latestPrice).toFixed(2)}
        </td>]
    }

    return currPriceObj
}

export default getCurrPriceDivs;
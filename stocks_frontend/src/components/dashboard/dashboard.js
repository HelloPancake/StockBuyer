import React from 'react';
import Portfolio from './portfolio/portfolio';
import StockSearch from './buy_stock/StockSearch';
import getCurrPriceDivs from '../dashboard/portfolio/currPriceDivs';



const Dashboard = (props) => {
    const currentUser = props.currentUser
    const portfolioHash = {}
    const transactionArr = []


    if ("transactions" in currentUser) {
        currentUser.transactions.forEach((transaction) => {
            transactionArr.push(<div className="item">company: {transaction.ticker} shares: {transaction.numShares} value: {transaction.numShares * transaction.price}</div>)
            if (transaction.ticker in portfolioHash) {
                if (transaction.status === "buy") {

                    portfolioHash[transaction.ticker][0] += transaction.numShares
                }
                else {
                    portfolioHash[transaction.ticker][0] -= transaction.numShares
                }
            }
            else {
                portfolioHash[transaction.ticker] = [transaction.numShares, transaction.price, transaction.company]
            }
        })
    }

    const currPriceDivs = getCurrPriceDivs(portfolioHash)
    
    return(
        <div id="dashboard">
            <div className="ui container raised segment">
                <StockSearch currentUser={currentUser} replaceUser={props.replaceUser}/>
            </div>

            <div className="ui container raised segment">
                <h1 className="ui header">Portfolio</h1>
                <Portfolio portfolio={portfolioHash}  portfolioHash={portfolioHash} currPriceDivs={currPriceDivs}/>
            </div>
        </div>
    )
}

export default Dashboard;
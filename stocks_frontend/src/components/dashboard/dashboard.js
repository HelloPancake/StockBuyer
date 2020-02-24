import React from 'react';
import Portfolio from './portfolio/portfolio';
import StockSearch from './buy_stock/StockSearch';


const Dashboard = (props) => {
    const currentUser = props.currentUser
    const portfolioHash = {}
    const transactionArr = []

    console.log(currentUser)

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


    return(
        <div id="dashboard">
            <div className="ui container raised segment">
                <StockSearch currentUser={currentUser} replaceUser={props.replaceUser}/>
            </div>

            <div className="ui container raised segment">
                <Portfolio portfolio={portfolioHash}/>
            </div>
        </div>
    )
}


export default Dashboard;
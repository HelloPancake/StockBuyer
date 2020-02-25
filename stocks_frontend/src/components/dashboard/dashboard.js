import React, {useState, useEffect} from 'react';
import Portfolio from './portfolio/portfolio';
import StockSearch from './buy_stock/StockSearch';
import getCurrPriceDivs from '../dashboard/portfolio/currPriceDivs';
import { Link } from "react-router-dom";
import Transactions from './transactions/transactions';
import { Redirect } from 'react-router-dom';



const Dashboard = (props) => {
    const currentUser = props.currentUser
    const portfolioHash = {}
    const transactionArr = []

    const [showPortfolio, changePortfolio] = useState(true)

    let grid;
    let funds;

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('/dashboard')
            if (response.status === 401){
                props.history.push('/')
            }
        }
        fetchData();
    }, [])

    const handleOnClick = (event) => {
        changePortfolio(!showPortfolio)
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    
    if ("transactions" in currentUser) {
        currentUser.transactions.forEach((transaction, idx) => {
            transactionArr.push(
            // <div className="item">action: {transaction.status}company: {transaction.ticker} shares: {transaction.numShares} value: {transaction.numShares * transaction.price} purchaseTime:{transaction.date} ticker:{transaction.ticker}</div>
                <tr key={idx}>
                    <td id="text">
                        <div className="content">
                            <h4 className="ui header" id="topHeader">
                                {transaction.ticker}
                            </h4>
                            <div className="sub header" id="bottomHeader" style={{ fontSize: "9pt", color: "grey" }}>
                                {transaction.company}
                            </div>
                        </div>
                    </td>
                    <td id="text">
                        {transaction.status}
                    </td>
                    <td id="text">
                        {transaction.numShares}
                    </td>
                    <td id="text">
                        {formatter.format(transaction.price)}
                    </td>
                    <td id="text">
                        {formatter.format(transaction.numShares * transaction.price)}
                    </td>
                    <td id="text">
                        {transaction.date}
                    </td>
                 
                </tr>
                )

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

    funds = (currentUser.funds) ? formatter.format(currentUser.funds) : null


    const currPriceDivs = getCurrPriceDivs(portfolioHash)

    if (showPortfolio){
        grid = <div className="ui container raised segment">
                    <button onClick={handleOnClick} className="ui left floated disabled button">Portfolio</button>
                    <button onClick={handleOnClick} className="ui button">Transactions</button>
                    <button className="ui right floated disabled button" style={{color: "black", backgroundColor: 'white', fontSize: "12pt"}}>
                            {funds}
                    </button>
                    <Portfolio portfolio={portfolioHash} portfolioHash={portfolioHash} currPriceDivs={currPriceDivs} />
                </div>
    }
    else {
        grid = <div className="ui container raised segment">
                    <button onClick={handleOnClick} className="ui left floated button">Portfolio</button>
                    <button onClick={handleOnClick} className="ui disabled button">Transactions</button>
                    <Transactions transactionArr = {transactionArr} />
                </div>
    }

    
    return(
        <div id="dashboard">
            <div className="ui container raised segment">
                <StockSearch currentUser={currentUser} replaceUser={props.replaceUser}/>
            </div>
            {grid}
            
        </div>
    )
}

export default Dashboard;
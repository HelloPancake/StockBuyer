import React, {useState, useEffect} from 'react';
import Portfolio from './portfolio/portfolio';
import StockSearch from './buy_stock/StockSearch';
import getCurrPriceDivs from '../dashboard/portfolio/currPriceDivs';
import Transactions from './transactions/transactions';


const Dashboard = (props) => {
    const portfolioHash = {}
    const transactionArr = []

    const [showPortfolio, changePortfolio] = useState(true)
    const [currentUser, changeCurrentUser] = useState({})
    
    let grid;
    let funds;

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('/dashboard/transactions', {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let user = await response.json()

            if (response.status === 401){
                props.history.push('/home')
            }
            console.log(user)
            changeCurrentUser(user.user)
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

    
    if (currentUser && "transactions" in currentUser) {
        currentUser.transactions.forEach((transaction, idx) => {

            const date = transaction.date.split("T")[0];
            const time = transaction.date.split("T")[1].split(".")[0];

            transactionArr.push(
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
                        {time}
                        <div>{date}</div>
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

    funds = (currentUser && currentUser.funds) ? formatter.format(currentUser.funds) : null


    const currPriceDivs = getCurrPriceDivs(portfolioHash)

    if (showPortfolio){
        grid = <div className="ui container raised segment">
                    <button onClick={handleOnClick} className="ui left floated disabled button">Portfolio</button>
                    <button onClick={handleOnClick} className="ui button">Transactions</button>
                    <button className="ui right floated disabled button" style={{color: "black", backgroundColor: 'white', fontSize: "12pt"}}>
                            Wallet: {funds}
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
                <StockSearch currentUser={currentUser} replaceUser={changeCurrentUser}/>
            </div>
            {grid}
            
        </div>
    )
}

export default Dashboard;
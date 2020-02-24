import React from 'react';

const Portfolio = (props) => {

    let portfolioHash = props.portfolio
    let portfolioArr = []
    let i = 0;

    for (let stock in portfolioHash){
        portfolioArr.push(<div className="item" key={i}> company: {portfolioHash[stock][2]} ticker: {stock} shares: {portfolioHash[stock][0]} value: {portfolioHash[stock][0] * portfolioHash[stock][1]}</div>)
        i += 1
    }
   
    
    return(
        <div className="ui very basic collapsing celled table">
            {portfolioArr}
        </div>
    )
}

export default Portfolio
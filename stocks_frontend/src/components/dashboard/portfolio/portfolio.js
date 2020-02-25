import React, {useState, useEffect} from 'react';
import getCurrPriceDivs from '../../dashboard/portfolio/currPriceDivs';


const Portfolio = (props) => {

    let portfolioHash = props.portfolio
    let portfolioArr = []
    let i = 0;

    const [currPriceDivs, changeCurrPriceDivs] = useState({})


    useEffect(() => {
        async function fetchData() {
            const response = await getCurrPriceDivs(portfolioHash);
            changeCurrPriceDivs(response)
        }
        fetchData()
    }, [portfolioHash]);
    
    console.log(currPriceDivs)
    if (portfolioHash) {
        for (let stock in portfolioHash){
            let currPriceDiv = (stock in currPriceDivs) ? currPriceDivs[stock][0] : <td id="text">loading...</td>
            let totalValueDiv = (stock in currPriceDivs) ? currPriceDivs[stock][1] : <td id="text">loading...</td>
            
            portfolioArr.push(
                <tr key={i}>
                    <td id="text">  
                        <div className="content">
                            <h4 className="ui header" id="topHeader">
                            {stock}
                            </h4>
                        <div className="sub header" id="bottomHeader">
                            {portfolioHash[stock][2]}
                        </div>
                        </div>
                    </td>
                    <td id="text">
                        {portfolioHash[stock][0]}
                    </td>
                    {currPriceDiv}
                    {totalValueDiv}
                </tr>
            )
            i += 1;
        }
    }
    
    return(
        <table className="ui celled table">
            <thead>
                <tr>
                    <th id="text" >Company</th>
                    <th id="text">Shares</th>
                    <th id="text">Current Price</th>
                    <th id="text">Total Value</th>
                </tr>
            </thead>
            <tbody>
            {portfolioArr}
            </tbody>
        </table>
    )
}

export default Portfolio
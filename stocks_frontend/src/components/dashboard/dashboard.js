import React from 'react';
import Portfolio from './portfolio/portfolio';
import StockSearch from './buy_stock/StockSearch';


const Dashboard = (props) => {

    return(
        <div>
            <Portfolio />
            <StockSearch />
        </div>
    )
}


export default Dashboard;
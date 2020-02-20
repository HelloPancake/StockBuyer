import React from 'react';
import Portfolio from './portfolio';
import StockSearch from './StockSearch';


const Dashboard = (props) => {

    return(
        <div>
            <Portfolio />
            <StockSearch />
        </div>
    )
}


export default Dashboard;
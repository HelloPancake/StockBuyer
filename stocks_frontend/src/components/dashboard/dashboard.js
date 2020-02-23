import React from 'react';
import Portfolio from './portfolio/portfolio';
import StockSearch from './buy_stock/StockSearch';


const Dashboard = (props) => {


    return(
        <div id="dashboard">
            <Portfolio currentUser={props.currentUser}/>
            <StockSearch />
        </div>
    )
}


export default Dashboard;
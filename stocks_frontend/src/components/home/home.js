import React from 'react';
import {Link} from "react-router-dom";


function Home (props) {

    return(
        <div className ="ui middle aligned center aligned grid">
            <div className="column">
            <div className="ui card" > 
                <div className="center aligned header">Stock Bets</div> 
                <Link to="/sign_in" >Sign in</Link> 
                <Link to="/sign_up" >Sign up</Link> 
           </div>
                
            </div>
        </div>
    )
}

export default Home;
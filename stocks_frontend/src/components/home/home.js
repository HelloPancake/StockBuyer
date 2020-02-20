import React from 'react';
import {Link} from "react-router-dom";


function Home (props) {

    return(
        <div className="home">
            <div>Stock Bets</div>
            <div><Link to="/sign_in">Sign in</Link></div>
            <div><Link to="/sign_up">Sign up</Link></div>
        </div>
    )
}

export default Home;
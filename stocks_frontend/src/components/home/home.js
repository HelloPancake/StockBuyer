import React from 'react';
import {Link} from "react-router-dom";


function Home (props) {

    return(
        <div id="home_card" className="ui centered card" style={{ height: "30vh", marginTop: "30vh" }} >
                <div className="center aligned header">Stock Bets</div> 
                <Link to="/sign_in" className="ui primary button" style={{ width: "70%"}}>Sign in</Link>
                <Link to="/sign_up" id="secondhomebutton" className="ui primary button" style={{ width: "70%",  marginTop:"2vh" }}>Sign up</Link> 
        </div>
    )
}

export default Home;
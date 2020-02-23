import React from 'react';
import {Link} from "react-router-dom";


function Home (props) {

    return(
        
        <div id ="home">
            <div className="ui centered card" > 
                <div className=" content ">
                    <div className="center aligned header">Stock Bets</div> 
                </div>

                <div className="content" id="homecard">
                    <Link to="/sign_in" className="ui button green" style={{marginBottom:"1vh", borderRadius:"0.75vh"}}>Sign in</Link> 
                    <Link to="/sign_up" className="ui button green" style={{borderRadius: "0.75vh" }}>Sign up</Link> 
                </div>
           </div>     
        </div>
    )
}

export default Home;
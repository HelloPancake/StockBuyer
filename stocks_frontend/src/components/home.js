import React from 'react';
import {Link} from "react-router-dom";


function Home (props) {

    return(
        <div className="home">
            <Link to="/sign_in">Sign in</Link>
            <Link to="/sign_up">Sign up</Link>
        </div>
    )
}

export default Home;
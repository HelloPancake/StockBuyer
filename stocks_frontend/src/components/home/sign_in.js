import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        const user = { email, password };
        e.preventDefault()
        let response = await fetch('/user/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user })
        })
        let currentUser = await response.json()
        props.replaceUser(currentUser.user)
        props.history.push('/dashboard')
    }
 
    return(
        <div id="home">
            <div className="ui centered card" >
                <div className="content">
                    <div className="header">
                        sign in
                    </div>
                </div>

                <div className="content">


                    <form onSubmit={handleSubmit} className="ui form">
                        <div className="field">
                            <label>email: </label>
                            <input type="text" value={email} onChange={handleEmailChange} />
                        </div>

                        <div className="field">
                            <label>password: </label>
                            <input type="password" value={password} onChange={handlePasswordChange} />
                        </div>

                        <button type="submit" value="Submit" className="ui green button">submit</button>
                    </form>
                </div>

                <div className="content">
                    <Link to='sign_up'>sign up</Link>
                </div>
            </div>
        </div>

    )
}

export default SignIn;
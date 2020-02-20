import React, { useState } from 'react';

const SignIn = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

   
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


 
    return(
        <div className = "home">
            <form onSubmit={handleSubmit} className="formAttributes">
                <label>
                    <div>Stock Bets</div>
                    <div>username:<input type="text" value={username} onChange={handleUsernameChange} /></div>
                    <div>password:<input type="text" value={password} onChange={handlePasswordChange} /></div>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
    
}

export default SignIn;
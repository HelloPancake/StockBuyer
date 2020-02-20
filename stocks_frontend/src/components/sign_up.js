import React, { useState } from 'react';

function SignUp(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <div>Stock Bets</div>
                    username: <input type="text" value={username} onChange={handleUsernameChange} />
                    password: <input type="text" value={password} onChange={handlePasswordChange} />
                    email: <input type="text" value={email} onChange={handleEmailChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
    
}

export default SignUp;
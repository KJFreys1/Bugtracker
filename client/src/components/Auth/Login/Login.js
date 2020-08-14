import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

export default function Login({ history, getUser }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        getUser({ email })
        setEmail("")
        setPassword("")
        history.push("/dashboard")
    }

    return (
        <div id="log">
            <div className="log-cont">
                <h1 className="log-title">Login</h1>
                <form className="log-form" onSubmit={handleSubmit}>
                    <div className="input-cont">
                        <label htmlFor="log-email">Email</label>
                        <input 
                            className="log-input" 
                            id="log-email"
                            type="email"
                            name="email" 
                            placeholder="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="input-cont">
                        <label htmlFor="log-password">Password</label>
                        <input 
                            className="log-input" 
                            id="log-password"
                            type="password" 
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <button className="log-btn" type="submit">Login</button>
                    <Link to="/register">New here? Click here to sign up!</Link>
                    <Link to="/">Back to home</Link>
                </form>
            </div>
        </div>
    )
}
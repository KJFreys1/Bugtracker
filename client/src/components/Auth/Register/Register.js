import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Register.css'

export default function Register() {
    const [name, setName] = useState("")
    const [nameInvalid, setNameInvalid] = useState("")
    const [email, setEmail] = useState("")
    const [emailInvalid, setEmailInvalid] = useState("")
    const [password, setPassword] = useState("")
    const [passInvalid, setPassInvalid] = useState("")
    const [confirm, setConfirm] = useState("")
    const [confInvalid, setConfInvalid] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setNameInvalid(name ? "" : "invalid-input")
        setEmailInvalid(email ? "" : "invalid-input")
        setPassInvalid(password ? "" : "invalid-input")
        setConfInvalid(confirm ? "" : "invalid-input")
        if (!name || !email || !password || !confirm) {
            return
        }

        if (password.length >= 8 && password.length <= 20) {
            if (password === confirm) {
                console.log("info received successfully")
                setName("")
                setEmail("")
                setPassword("")
                setConfirm("")
            } else {
                alert("Error: Passwords do not match.")
                setPassword("")
                setConfirm("")
                setPassInvalid("invalid-input")
            setConfInvalid("invalid-input")
            }
        } else {
            alert("Error. Passwords must be between 8 and 20 characters.")
            setPassInvalid("invalid-input")
            setConfInvalid("invalid-input")
        }
    }

    return (
        <div id="reg">
            <div className="reg-cont">
                <h1 className="log-title">Sign Up</h1>
                <form className="log-form" onSubmit={handleSubmit}>
                    <div className="input-cont">
                        <label htmlFor="log-name">Name</label>
                        <input 
                            className={`reg-input ${nameInvalid}`} 
                            id="log-name"
                            type="name"
                            name="name" 
                            placeholder="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className="input-cont">
                        <label htmlFor="log-email">Email</label>
                        <input 
                            className={`reg-input ${emailInvalid}`} 
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
                            className={`reg-input ${passInvalid}`} 
                            id="log-password"
                            type="password" 
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className="input-cont">
                        <label htmlFor="log-confirm">Confirm Password</label>
                        <input 
                            className={`reg-input ${confInvalid}`} 
                            id="log-confirm"
                            type="password" 
                            name="confirm"
                            placeholder="confirm password"
                            value={confirm}
                            onChange={e => setConfirm(e.target.value)}
                        ></input>
                    </div>
                    <button className="reg-btn" type="submit">Sign Up</button>
                    <Link to="/login">Already a user? Click here to login!</Link>
                    <Link to="/">Back to home</Link>
                </form>
            </div>
        </div>
    )
}
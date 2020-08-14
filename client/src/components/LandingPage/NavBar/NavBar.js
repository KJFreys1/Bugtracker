import React from 'react'
import { Link } from 'react-router-dom'

import  './NavBar.css'

export default function NavBar() {
    return (
        <div id="nav">
            <ul>
                <Link className="nav-btn" to="/register">Sign Up</Link>
                <Link className="nav-btn" to="/login">Login</Link>
            </ul>
        </div>
    )
}
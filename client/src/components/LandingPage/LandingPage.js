import React from 'react'
import NavBar from './NavBar/NavBar'

import './LandingPage.css'

export default function LandingPage() {
    return (
        <div id="lp">
            <NavBar />
            <div className="lp-flex-a">
                <div className="lp-flex-left lp-flex-item">
                    <h1>DevTickets</h1>
                    <p>
                        Welcome to your own personal task-managing platform,
                        where you can keep track and manage all your current 
                        tasks. Check out the video on the right to learn more!
                    </p>
                </div>
                <div className="lp-flex-right lp-flex-item">
                    <div className="video-cont"></div>
                </div>
            </div>
        </div>
    )
}
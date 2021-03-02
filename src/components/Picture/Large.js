import React from 'react'
import './Picture.css'
import Background from './ayamgoreng.jpg'

function Large() {
    return (
        <div className="Picture Large" style={{backgroundImage: `url(${Background})`, backgroundSize: "banner"}}>
            <p className="tag">MISTERI</p>
            <p className="title">Haiwan tak makan manusia</p>
            <p className="details">Februari 20, 2020 / Sharif</p>
        </div>
    )
}

export default Large

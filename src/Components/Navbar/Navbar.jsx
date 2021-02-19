import React from 'react'
import Logo from '../../image/jjj.png'
import Image from '../../image/Mask Group.png'
import Black from '../../image/black woman.png'
import Vec from '../../Icons/search-solid 1.png'
import tech from '../../Icons/Vector (4).png'
import Kim from '../../Icons/Vector.png'
import Rain from '../../Icons/Group (3).png'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className = "run">
        <img src= {Logo} />
        <h4>Coral</h4>
        <div className="bike"></div>
        <div className="rap">
            <img src = {Vec}/>
            <input type = "text" placeholder = "Search"/>
            <div className="kim">
            <img src= {Kim} />
            </div>
            <div className="rain">
            <img src = {Rain} />
            </div>
            <div className="bat">
            <p>Client 1</p>
            <img src = {Black} />
            </div>
            
     <div className = "ada">
             <img src={Image}  />
             <p className="well">Welcome, </p>
             <h2 className="big">ROHAN</h2>
             <div className ="boxed">
             <img src = {tech} />
                    <p>Your account is not fully set up, Go to <strong>Account Settings</strong></p>
            </div>
        </div>
        </div>
    </div>
    )
}

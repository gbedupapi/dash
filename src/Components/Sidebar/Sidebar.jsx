import React from 'react'
import './Sidebar.css'
import anu from '../../Icons/Group.png'
import yan from '../../Icons/Orion_money-box.png'
import arm from '../../Icons/history.png'
import ann from '../../Icons/Orion_credit-card (1).png'
import lie from '../../Icons/single-01 1.png'
import babe from '../../Icons/Orion_gear.png'
import tina from '../../Icons/Orion_calls.png'
import omo from '../../Icons/logout (1).png'

export default function Sidebar() {
    return (
        
            <div className = "sidebar">
                <div className = "Anu">
                    <h2>Overview</h2>
                    <img src ={anu}/>
                </div>
                <div className="yan">
                    <h2>Investment</h2>
                    <img src={yan}/>
                </div>
                <div className="arm">
                    <h2>History</h2>
                    <img src={arm}/>
                </div>
                <div className="ann">
                    <h2>Payment</h2>
                    <img src={ann}/>
                </div>
                <div className="lie">
                    <h2>Account</h2>
                    <img src={lie}/>
                </div>
                <div className="line"> </div>
                <div className="babe">
                    <h2>Settings</h2>
                    <img src ={babe}/>
                </div>
                <div className="tina">
                    <h2>Support</h2>
                    <img src ={tina}/>
                </div>
                <div className="omo">
                    <h2>Logout</h2>
                    <img src ={omo}/>
                </div>
               
            </div>
        
        
    )
};
import React from 'react'
import './Dashboard.css'
import Come from '../../Icons/credit-card (1) 1.png'
import Kone from '../../Icons/Orion_pay (1).png'
import Dan from '../../Icons/withdraw (1).png'
import Data from '../../image/data.jpg'

export default function Dashboard() {
    return (
        <div className ="dash">
            <div className="contain">
                <img src={Come}/>
                <div className="will"></div>
                <h2>N250,745,000</h2>
                <p>Available Balance</p>
                <div className="hova"> 
                    <button>Fund Account</button>
                </div>
            <div className="container">
                <img src={Kone}/>
                <div className="lee"></div>
                <h2>N******</h2>
                <p>Total Investment</p>
            <div className="contains">
                <img src={Dan}/>
                <div className="bee"></div>
                <h2>N450,000,000</h2>
                <p>Total Withdrawal</p>
                <div className="eve">
                    <button>Withdraw</button>
                </div>
            </div>
            </div>
            </div>
            <div className="work">
                <h1>Investment Overview</h1>
                <img src={Data} alt="Graph"/>

            </div>
            <div className="amara">
                <h1>Save for the Future join the Elite list, Invest with Coral Trade</h1>
                <p>Entrust your money to Coral Trade and watch it grow with no work required of you</p>
                <div className="pap">
                    <button>Invest Now</button>
                </div>
            </div>
        </div>
    )
}

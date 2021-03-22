import React from "react"
import {Link} from "react-router-dom"
import "./Master.css"

export const MasterDetail = (master) => (
    <div className="masterDetail master__{master.id}">
            <h2 className="master__name">Your Master {master?.name}</h2>
            <div className="master__image">
                <img className="master__avatar" src={`./jedi/${master.image}.png`} alt={`${master?.image}`}/>
            </div>
            <button className="master__about">About</button>
            <Link to="/masters" className="master__selection">Choose Your Master Jedi</Link>
    </div>
)


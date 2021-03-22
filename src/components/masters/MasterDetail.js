import React from "react"
import {Link} from "react-router-dom"
import "./Master.css"

export const MasterDetail = (master) => (
    <div className="masterDetail master__{master.id}">
            <h2 className="master__name">Your Master {master?.name}</h2>
            <img className="master__image" src={"./jedi/obi-wan-kenobi.png"} alt={`${master?.image}`}/>
            <button className="master__about">About {master?.name}</button>
            <Link to="/masters" className="master__selection">Choose Your Master Jedi</Link>
    </div>
)


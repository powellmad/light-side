import React from "react"
import { Link } from "react-router-dom"
import "./Master.css"

export const MasterDetail = (master) => (
    <div className="masterDetail master__{master.id}">
        <div className="master__selected">
            <h2 className="master__name">Your Master, Obi-Wan {master?.name}</h2>
            <Link to="/masters" className="master__selection">choose</Link>
        </div>
        <img className="master__image" src={"./jedi/obi-wan-kenobi.png"} alt={`${master?.image}`} />
        <button className="master__about">About {master?.name}</button>
    </div>
)


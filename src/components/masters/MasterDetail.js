import React from "react"
import { useHistory } from "react-router-dom"
import "./Master.css"

export const MasterDetail = ({master}) => {
    const history = useHistory()

    return ( <div className="masterDetail master__{master.id}">
        <div className="master__selected">
            <h2 className="master__name">Your Master, {master?.name}</h2>
            <button onClick={() => { history.push(`/masters/edit/${}`)}} 
            className="master__selection">Choose Jedi</button>
        </div>
        <img className="master__image" src={`./jedi/${master?.image}.png`} alt={`${master?.image}`} />
        <button className="master__about">About {master?.name}</button>
    </div>)
}


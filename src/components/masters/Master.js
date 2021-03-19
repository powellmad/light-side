import React from "react"
import yoda from "./../../images/jedi/yoda.png"

export const Master = ({ master }) => (
    <div className="master master__{master.id}">
            <div className="master__name">{master?.name}</div>
            <div className="master__image">
                <img className="master__avatar" src={yoda} alt={`${master?.image}`}/>
            </div>
    </div>
)

// ./../../images/jedi/${master?.image}`.png
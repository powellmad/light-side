import React from "react"


export const Master = ({ master }) => {
    return (
        <div className="master master__{master.id}">
            <div className="master__name">{master?.name}</div >
            <div className="master__image">
                <img className="master__avatar" src={`./jedi/${master.image}.png`} alt={`${master?.image}`} />
            </div>
        </div >
    )
}
// ./../../images/jedi/${master?.image}`.png

// src/images/jedi/ahsoka-tano.png
import React from "react"

export const Master = ({ master }) => {
    return (
        <div className="master master__{master.id}">
            <h4 className="master__name">{master?.name}</h4 >
            <div className="master__avatars">
                <img className="master__avatar" src={`./jedi/${master.image}.png`} alt={`${master?.image}`} />
            </div>
        </div >
    )
}
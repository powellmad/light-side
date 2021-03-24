import React,{ useState, useContext }  from "react"
import {useHistory} from "react-router-dom"
import { UserContext } from "../users/UserProvider"

export const Master = ({ master }) => {
    const {updateMaster} = useContext(UserContext)
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))
    const history = useHistory()
    
    const selectMaster = () => {
        const updatedUserObject = {
            id: currentUser,
            masterId: master.id
        }
        updateMaster(updatedUserObject)
        .then(() => history.push("/"))
    }

    return (
        <div className="master master__{master.id} " onClick={selectMaster}>
            <h4 className="master__name">{master?.name}</h4 >
            <div className="master__avatars">
                <img className="master__avatar" src={`./jedi/${master.image}.png`} alt={`${master?.image}`} />
            </div>
        </div>
    )
}

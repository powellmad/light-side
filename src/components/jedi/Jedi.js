import React,{ useContext }  from "react"
import {useHistory} from "react-router-dom"
import { UserContext } from "../users/UserProvider"

export const Jedi = ({ jedi }) => {
    const {updateJedi} = useContext(UserContext)
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))
    const history = useHistory()
    
    const selectJedi = () => {
        const updatedUserObject = {
            id: currentUser,
            jediId: jedi.id
        }
        updateJedi(updatedUserObject)
        .then(() => history.push("/"))
    }

    return (
        <div className="jedi jedi__{jedi.id} " onClick={selectJedi}>
            <h4 className="jediSelect__name">{jedi?.name}</h4 >
            <div className="jedi__avatars">
                <img className="jedi__avatar" src={`./jediAvatars/${jedi.image}.png`} alt={`${jedi?.image}`} />
            </div>
        </div>
    )
}

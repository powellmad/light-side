import React,{ useContext }  from "react"
import {useHistory} from "react-router-dom"
import { UserContext } from "../users/UserProvider"

export const Theme = ({ theme }) => {
    const {updateTheme} = useContext(UserContext)
    const currentUser = parseInt(sessionStorage.getItem("app_user_id"))
    const history = useHistory()
    
    const selectTheme = () => {
        const updatedUserObject = {
            id: currentUser,
            themeId: theme.id
        }
        updateTheme(updatedUserObject)
        .then(() => history.push("/"))
    }

    return (
        <div className="theme theme__{theme.id} " onClick={selectTheme}>
            <h4 className="themeSelect__name">{theme?.name}</h4 >
            <div className="theme__lightsaber">
                <img className="theme__color" src={`./jediImages/${theme.image}.png`} alt={`${theme?.image}`} />
            </div>
        </div>
    )
}
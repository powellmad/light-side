import React, { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
    return fetch("http://localhost:8088/users?_expand=jedi")
    .then(res => res.json())
    .then(setUsers)
    }

    const getUserById = (id) => {
        return fetch(`http://localhost:8088/users/${id}?_expand=jedi`)
            .then(res => res.json())
    }
    
    const updateJedi = (user) => {
        return fetch(`http://localhost:8088/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
          .then(getUsers)
    }
    
    return (
        <UserContext.Provider value={{
            users, getUsers, getUserById, updateJedi
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
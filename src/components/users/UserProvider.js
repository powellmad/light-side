import React, { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
    return fetch("http://localhost:8088/users?_expand=jedi")
    .then(res => res.json())
    .then(setUsers)
    }

    // This fetch call gets a single user by id to get all the info for the current user logged in
    const getUserById = (id) => {
        return fetch(`http://localhost:8088/users/${id}?_expand=jedi`)
            .then(res => res.json())
    }
    
    // Patch request for when a user selects a new jedi to be their jedi master
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
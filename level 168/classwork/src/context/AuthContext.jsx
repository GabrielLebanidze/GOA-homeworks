import { createContext, useEffect, useState } from "react";
import { getLocal, setLocal } from "../utils/localStorage.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const [users, setUsers] = useState(getLocal('users') || [])
    const [curUser, setCurUser] = useState(getLocal('curUser') || {})
    const navigate = useNavigate()

    useEffect(() => {
        setLocal('users', users)
    }, [users])

    useEffect(() => {
        setLocal('curUser', curUser)
        setUsers(users.map((cur) => cur.id === curUser.id ? curUser : cur))
    }, [curUser])

    return (
        <AuthContext.Provider value={{users, setUsers, curUser, setCurUser, navigate }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
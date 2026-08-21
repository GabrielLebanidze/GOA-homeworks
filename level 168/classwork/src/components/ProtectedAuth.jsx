import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import { Navigate } from "react-router-dom"

function ProtectedAuth({ children }){
    const {curUser} = useContext(AuthContext)
    if(Object.entries(curUser).length) return <Navigate to='/'/>

    return children
}

export default ProtectedAuth
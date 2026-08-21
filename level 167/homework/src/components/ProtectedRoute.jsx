import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate } from "react-router-dom"
import Register from "../Pages/Register.jsx"

function ProtectedRoute({ children }){
    const { curUser } = useContext(AuthContext)
    if(!Object.keys(curUser).length) return <Navigate to='/authorization'/>
    return children
}

export default ProtectedRoute
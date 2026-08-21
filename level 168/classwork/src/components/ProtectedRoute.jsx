import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }){
    const {curUser} = useContext(AuthContext)
    if(Object.entries(curUser).length) return children
    
    return <Navigate to='/register'/>
}

export default ProtectedRoute
import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider.jsx"

function PublicRoute({ children }){
    const { curUser } = useContext(AuthContext)
    if(Object.keys(curUser).length) return <Navigate to='/'/>

    return children
}

export default PublicRoute
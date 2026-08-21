import { Link, Outlet } from "react-router-dom"
import Navig from "../components/Navig.jsx"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"

function Profile(){

    const { curUser } = useContext(AuthContext)

    return(
        <>
            <Navig /><br /><br />
            <div style={{border: '3px solid black', width:400}}>
                <p>name: {curUser.name} {curUser.surname}</p>
                <p>email: {curUser.email}</p>
                <p>password: {'*'.repeat(curUser.password.length)}</p>
                <p>id: {curUser.id}</p>
            </div><br /><br />
            <Link to={'/profile/cart'}>your cart</Link><br /><br />
            <Link to={'/profile/history'}>order history</Link><br /><br />
            <Outlet />
        </>
    )
}

export default Profile
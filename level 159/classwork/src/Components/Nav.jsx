import { NavLink } from "react-router-dom"

function Nav(){
    return(
        <nav style={{display:"flex", gap:10}}>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/articles'}>articles</NavLink>
        </nav>
    )
}

export default Nav
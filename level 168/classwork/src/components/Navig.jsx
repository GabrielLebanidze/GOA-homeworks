import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx"

function Navig(){
    const {setCurUser, curUser, navigate} = useContext(AuthContext)

    return(
        <div style={{display:"flex", justifyContent:'space-between', width:500}}>
            <Link to='/'>home</Link>
            <Link to='/profile'>profile</Link>
            {Object.entries(curUser).length ? <button onClick={() => {setCurUser({})}}>log out</button> : <button onClick={() => navigate('/register')}>register</button>}
        </div>
    )
}

export default Navig
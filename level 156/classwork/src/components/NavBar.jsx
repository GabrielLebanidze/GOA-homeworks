import { Link } from "react-router-dom"
function NavBar({setCurUser}) {
    const accounts = JSON.parse(localStorage.getItem("accounts"))
    function logout(e){
        let cur = accounts.find((a) => a.active==true)
        cur.active = false
        localStorage.setItem("accounts", JSON.stringify(accounts))
        setCurUser((prev) => ({...prev, active: false}))

    }

    return (
        <nav style={{ display: 'flex', gap: '15px', marginBottom:'20px'}}>
            <Link to='/home'>home</Link>
            <Link to='/favorites'>favorites</Link>
            <button onClick={logout}>log out</button>
        </nav>
    )
}

export default NavBar
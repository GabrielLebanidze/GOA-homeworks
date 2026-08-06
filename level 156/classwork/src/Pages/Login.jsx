import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getLocal, setLocal } from "../utils/localStorage"
function Login({ setCurUser }) {
    const accounts = getLocal() || []
    let [emailError, setEmailError] = useState(false)
    let [passError, setPassError] = useState(false)
    let [passError1, setPassError1] = useState(false)
    const navigate = useNavigate()
    function handleLogin(e) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const emailExists = accounts.some(acc => acc.email == email)
        setEmailError(!emailExists)
        if (!emailError) {
            const acc = accounts.find(acc => acc.email === email)
            password.length<5? setPassError1(true) : setPassError1(false)
            if (acc.password !== password && password.length > 5) {
                setPassError(true)
            } else if (acc.password === password){
                setPassError(false)
                acc.active = true
                setCurUser({...acc, active:true})
                setLocal(accounts)
                navigate("/home")
            }
        }
    }

    return (
        <>
            <h1>Log in</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="enter email here" name='email' required /><br /><br />
                <input type="password" placeholder="enter password here" name='password' required /><br /><br />
                <button>log in</button><br />
                {emailError ? <p style={{ color: 'red' }}>email not registered</p> : undefined}
                {passError ? <p style={{ color: 'red' }}>incorrect password</p> : undefined}
                {passError1 ? <p style={{ color: 'red' }}>password must have 5 symbols minimum</p> : undefined}
                <p>you don't have an account? <Link to="/">register here</Link></p>
            </form>
        </>
    )
}

export default Login
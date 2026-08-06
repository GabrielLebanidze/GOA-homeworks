import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getLocal, setLocal } from '../utils/localStorage'
function Register() {
    const accounts = getLocal() || []
    let [error, setError] = useState(false)
    let [error2, setError2] = useState(false)

    function handleRegister(e) {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const emailExists = accounts.some(acc => acc.email === email)
        if (!emailExists && password.length >= 5) {
            setError(false)
            setError2(false)
            accounts.push({ name, email, password, active: false, favorites: [] })
            setLocal(accounts)
        }
        emailExists ? setError(true) : setError(false)
        password.length < 5 ? setError2(true) : setError2(false)
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="enter name here" name='name' required /><br /><br />
                <input type="email" placeholder="enter email here" name='email' required /><br /><br />
                <input type="password" placeholder="enter password here" name='password' required /><br /><br />
                <button>register</button><br />
                {error ? <p style={{ color: 'red' }}>email already in use</p> : undefined}
                {error2 ? <p style={{ color: 'red' }}>password must have 5 symbols minimum</p> : undefined}
                <p>already have an account? <Link to="/login">log in here</Link></p>
            </form>
        </>
    )
}

export default Register
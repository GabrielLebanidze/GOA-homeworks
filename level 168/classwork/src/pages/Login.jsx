import { Link } from "react-router-dom"
import { useForm } from "../Hooks/useForm.js"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import Navig from "../components/Navig.jsx"



function Login() {

    const { users, setCurUser, navigate } = useContext(AuthContext)

    const { handleSubmit, error } = useForm()

    function login(formData, setError) {
        const user = users.find((user) => user.email == formData.email)
        if (!user) return setError(true)
        else if (user.password != formData.password) return setError(true)
        else{
            setCurUser(user)
            navigate('/')
        }
    }

    return (
        <>
            <Navig /><br />
            <form onSubmit={(e) => handleSubmit(e, login)}>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" placeholder="enter email here" required /><br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" placeholder="enter password here" required /><br /><br />
                <button>Log in</button>
            </form>
            <p style={{ color: 'red', height: 15 }}>{error ? 'invalid user' : ''}</p>
            <p>Don't have an account? Register <Link to='/register'>here</Link></p>
        </>
    )
}

export default Login
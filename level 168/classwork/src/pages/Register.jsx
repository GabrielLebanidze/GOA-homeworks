import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import { useForm } from "../Hooks/useForm.js"
import Navig from "../components/Navig.jsx"


function Register() {

    const { users, setUsers, navigate} = useContext(AuthContext)

    const {handleSubmit, error} = useForm()

    function register(formData, setError){
        if(users.some((a) => a.email == formData.email)){
            setError(true)
            return
        }

        setUsers([...users, {...formData, cart: [], orderHistory: [], id: Date.now()}])
        navigate('/login')
    }

    return (
        <>
            <Navig /><br />
            <form onSubmit={(e) => handleSubmit(e, register)}>
                <label htmlFor="name">Name</label><br />
                <input type="text" name="name" id="name" placeholder="name" required /><br /><br />
                <label htmlFor="surname">Surname</label><br />
                <input type="text" name="surname" id="surname" placeholder="surname" required /><br /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" placeholder="email" required /><br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" placeholder="password" required /><br /><br />
                <button>register</button>
            </form>
            <p style={{color:'red', height:15}}>{error ? 'email already used' : ''}</p>
            <p>Already have an account? Log in <Link to='/login'>here</Link></p>
        </>
    )
}

export default Register
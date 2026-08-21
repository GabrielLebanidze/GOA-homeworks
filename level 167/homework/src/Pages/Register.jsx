import { useContext } from "react";
import { useForm } from "../Hooks/useForm.js";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Link } from "react-router-dom";
import { setLocal } from "../utils/localStorage.js";

const Register = () => {
    const { users, setUsers, navigation } = useContext(AuthContext);
    const [handleSubmit, isError] = useForm();


    const register = (formData, setIsError) => {
        if(users.some(cur => cur.email === formData.email)) {
            setIsError(true);
            return;
        }

        const newUsers = [ ...users, { id: `${formData.name}.${formData.surname}.${users.length + 1}`, ...formData, posts: [] } ];

        setUsers(newUsers);
        // setLocal("users", newUsers);
        navigation("/authorization");
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e, register)}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" placeholder="Enter your name..." required />
                <br /><br />
                <label htmlFor="surname">Surname:</label><br />
                <input type="text" id="surname" name="surname" placeholder="Enter your surname..." required />
                <br /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" placeholder="Enter your email..." required />
                <br /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" placeholder="Enter your password..." required />
                <p style={{ color: "red", height: 15, textDecoration: "underline" }}>{isError ? "Email already exists!" : ""}</p>
                <button>Register</button>
            </form>
            <p>Already have an account? <Link to="/authorization">Authorization</Link></p>
        </div>
    );
}

export default Register;
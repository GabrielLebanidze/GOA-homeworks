import { useState } from "react";
import { getLocal, setLocal } from "../utils/localStorage.js";
import { Link } from "react-router-dom";

const Register = ({ setCurUser, nav }) => {
    const [isError, setIsError] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = getLocal("users") || [];

        if (users.some(cur => cur.email === email)) {
            setIsError(true);
            return;
        }

        const newUser = { username, email, password, favorites: [], obj: {all: true, read: false, unread: false} };

        users.push(newUser);
        setLocal("users", users);
        setCurUser(newUser);
        nav("/");
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="username">Username</label><br />
                <input type="text" name="username" id="username" placeholder="Enter username..." required />
                <br /><br />
                <label htmlFor="email">Email</label><br />
                <input type="text" name="email" id="email" placeholder="Enter email..." required />
                <br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" placeholder="Enter password..." required />
                <br /><br />
                <button>Register</button>

                <p style={{ color: "red", fontSize: 13, height: 13 }}>{isError ? "This email already exist!" : ""}</p>

                <p>Already have an account? <Link to="/authorization">Authorization</Link> </p>
            </form>
        </div>
    );
}

export default Register;
import { useState } from "react";
import { getLocal } from "../utils/localStorage";
import { Link } from "react-router-dom";

const Authorization = ({ setCurUser, nav }) => {
    const [isError, setIsError] = useState(false);

    const handleAuthorization = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const users = getLocal("users") || [];
        const accountIndex = users.findIndex(cur => cur.email === email && cur.password === password);

        if (accountIndex === -1) {
            setIsError(true);
            return;
        }

        setCurUser(users[accountIndex]);
        nav("/");
    }

    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={handleAuthorization}>
                <label htmlFor="email">Email</label><br />
                <input type="text" name="email" id="email" placeholder="Enter email..." required />
                <br /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" id="password" placeholder="Enter password..." required />
                <br /><br />
                <button>Authorization</button>

                <p style={{ color: "red", fontSize: 13, height: 13 }}>{isError ? "User not found!" : ""}</p>

                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
}

export default Authorization;
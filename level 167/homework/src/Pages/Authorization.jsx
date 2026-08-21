import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.jsx";
import { useForm } from "../Hooks/useForm.js";
import { setLocal } from "../utils/localStorage.js";

const Authorization = () => {
    const { users, setCurUser, navigation } = useContext(AuthContext);
    const [handleSubmit, isError] = useForm();

    const authorization = (formData, setIsError) => {
        const userIndex = users.findIndex(cur => cur.email === formData.email && cur.password === formData.password);

        if(userIndex === -1) {
            setIsError(true);
            return;
        }

        setCurUser(users[userIndex]);
        setLocal("curUser", users[userIndex]);
        navigation("/");
    }

    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={(e) => handleSubmit(e, authorization)}>
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" placeholder="Enter your email..." required />
                <br /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" placeholder="Enter your password..."required />
                <p style={{ color: "red", height: 15, textDecoration: "underline" }}>{isError ? "User not found!" : ""}</p>
                <button>Authorization</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
}

export default Authorization;
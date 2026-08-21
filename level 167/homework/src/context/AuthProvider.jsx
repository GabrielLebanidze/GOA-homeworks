import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocal, setLocal } from "../utils/localStorage.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(getLocal("users") || []);
    const [curUser, setCurUser] = useState(getLocal("curUser") || {});
    const [posts, setPosts] = useState([]);

    const navigation = useNavigate();

    // curUser-ის ცვლილებისას არ იცვლება users მდგომარეობა
    // შემდეგ გაკვეთილზე უნდა ჩავამატოთ ესეც

    useEffect(() => {
        console.log(users);
        setLocal("users", users);

        const result = [];

        for(const user of users) {
            result.push(...user.posts)
        }
        
        setPosts(result);
    }, [users]);

    console.log(posts)

    useEffect(() => {
        console.log(curUser);
    }, [curUser])

    return (
        <AuthContext.Provider value={{ users, setUsers, curUser, setCurUser, posts, setPosts, navigation }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
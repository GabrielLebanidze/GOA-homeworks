import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Authorization from "./pages/Authorization.jsx";
import Home from "./pages/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Favorites from "./pages/Favorites.jsx";
import { getLocal, setLocal } from "./utils/localStorage.js";

const App = () => {
    const [curUser, setCurUser] = useState(getLocal("curUser") || {});
    const navigate = useNavigate();

    useEffect(() => {
        setLocal("curUser", curUser);
        console.log(curUser);
    }, [curUser])

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute curUser={curUser}>
                        <Home curUser={curUser} setCurUser={setCurUser} />
                    </ProtectedRoute>
                } />
                <Route path="/favorites" element={
                    <ProtectedRoute curUser={curUser}>
                        <Favorites curUser={curUser} setCurUser={setCurUser} />
                    </ProtectedRoute>
                } />
                <Route path="/register" element={<Register setCurUser={setCurUser} nav={navigate} />} />
                <Route path="/authorization" element={<Authorization setCurUser={setCurUser} nav={navigate} />} />
                <Route path="*" element={<h1>404 Page not found</h1>} />
            </Routes>
        </>
    );
}

export default App;
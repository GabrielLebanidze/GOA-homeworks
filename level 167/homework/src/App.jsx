import { Link, Route, Routes } from "react-router-dom";
import Authorization from "./Pages/Authorization.jsx";
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";


const App = () => {
    const { curUser, setCurUser } = useContext(AuthContext);

    return (
        <>
            {
                Object.keys(curUser).length !== 0 && (
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <Link to='/'>Home</Link>
                    <Link to={`/${curUser.id}`}>your Profile</Link>
                    <button onClick={() => setCurUser({})}>Log out</button>
                </div>
            )
            }
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path="/:id" element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                } />
                <Route path="/register" element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>                    
                } />
                <Route path="/authorization" element={
                    <PublicRoute>
                        <Authorization />
                    </PublicRoute>                    
                } />
                <Route path="*" element={<h1>404 Page not found</h1>} />
            </Routes>
        </>
    );
}

export default App;
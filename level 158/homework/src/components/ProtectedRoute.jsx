import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ curUser, children }) => {
    if(Object.keys(curUser).length === 0) return <Navigate to="/authorization" />;

    return children;
}

export default ProtectedRoute;
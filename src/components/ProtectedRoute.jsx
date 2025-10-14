
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../logic/AuthLogic";

export default function ProtectedRoute({ children }) {
    if (!isLoggedIn()) {
        return <Navigate to="/" replace />; 
    }
    return children;
}

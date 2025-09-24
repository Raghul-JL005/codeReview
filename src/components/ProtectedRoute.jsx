
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../logic/AuthLogic";

export default function ProtectedRoute({ children }) {
    if (!isLoggedIn()) {
        return <Navigate to="/" replace />; // redirect to login if not logged in
    }
    return children;
}

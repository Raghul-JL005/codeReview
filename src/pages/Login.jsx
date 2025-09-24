import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import CommonButton from "../components/CommonButton";
import { loginUser } from "../logic/AuthLogic";
import "./Login.css";

export default function Login() {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("superadmin@gmail.com");
  const [password, setPassword] = useState("Hari@123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);
    try {
      setError("");
      await loginUser(emailOrPhoneNumber, password);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <Typography variant="h4" className="login-title">
          Login
        </Typography>
        <TextField
          label="Email or Phone Number"
          variant="outlined"
          className="login-input"
          value={emailOrPhoneNumber}
          onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography className="login-error">{error}</Typography>}
        <CommonButton
          onClick={handleLogin}
          disabled={loading}
          className="login-button"
        >
          {loading ? <CircularProgress size={20} color="inherit" /> : "Login"}
        </CommonButton>
      </div>
    </div>
  );
}

import { loginApi } from "../api/AuthApi";

export const loginUser = async (emailOrPhoneNumber, password) => {
  if (!emailOrPhoneNumber || !password) throw new Error("email and password are required");

  try {
    const data = await loginApi(emailOrPhoneNumber, password);
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Login failed");
  }
};

export const isLoggedIn = () => !!localStorage.getItem("token");
export const logoutUser = () => localStorage.removeItem("token");

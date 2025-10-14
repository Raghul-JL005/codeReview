import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/apiServies";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ emailOrPhoneNumber, password }, { rejectWithValue }) => {
    try {
      const data = await loginApi(emailOrPhoneNumber, password);
      localStorage.setItem("token", data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);
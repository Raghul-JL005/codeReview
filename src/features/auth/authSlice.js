// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { loginApi } from "../../api/AuthApi";

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async ({ emailOrPhoneNumber, password }, { rejectWithValue }) => {
//     try {
//       const data = await loginApi(emailOrPhoneNumber, password);
//       localStorage.setItem("token", data.token);
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data?.message || "Login failed");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: null,
//     token: localStorage.getItem("token") || null,
//     loading: false,
//     error: null
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem("token");
//       state.user = null;
//       state.token = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })  
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   }
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";
import {loginUser} from "./authThunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })  
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

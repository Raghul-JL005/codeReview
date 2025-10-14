// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getCategoriesApi } from "../../api/AuthApi";

// // Async thunk to fetch categories
// export const fetchCategories = createAsyncThunk(
//   "category/fetchCategories",
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await getCategoriesApi();
//       return data; // data is array of categories
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const categorySlice = createSlice({
//   name: "category",
//   initialState: {
//     categories: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategories.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.loading = false;
//         state.categories = action.payload;
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default categorySlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoryThunks";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;

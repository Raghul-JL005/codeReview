import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesApi } from "../../api/apiServies";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCategoriesApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

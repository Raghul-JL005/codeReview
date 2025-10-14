import { getCategoriesApi } from "../api/apiServies";

export const fetchCategories = async () => {
  try {
    const categories = await getCategoriesApi();
    return categories; // categories is an array
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch categories");
  }
};





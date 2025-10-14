import api from "./axiosInstance";

// Login
export const loginApi = async (emailOrPhoneNumber, password) => {
  const res = await api.post("/user/login", { emailOrPhoneNumber, password });
  return res.data;
};

// Get Categories
export const getCategoriesApi = async () => {
  const res = await api.get("/categories/category");
  return res.data.data; // array of categories
};

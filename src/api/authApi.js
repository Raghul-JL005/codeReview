import axios from "axios";

const USER_API_URL = "https://ttdc.skeintech.com:8001/valueStreaks/user";
const CATEGORY_API_URL = "https://ttdc.skeintech.com:8001/valueStreaks/categories";

// Login
export const loginApi = async (emailOrPhoneNumber, password) => {
  const res = await axios.post(`${USER_API_URL}/login`, { emailOrPhoneNumber, password });
  return res.data;
};

// Get Categories
export const getCategoriesApi = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${CATEGORY_API_URL}/category`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data; //Extract the array of categories
};

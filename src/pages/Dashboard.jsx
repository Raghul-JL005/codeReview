
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCategories } from "../features/category/categoryThunks";
import CommonButton from "../components/CommonButton";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";

import "./Dashboard.css";
import { logout } from "../features/auth/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get state from Redux
  const { categories, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };
const handleReusablePage = () => {
    
    navigate("/reusableData");
  };
  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Typography variant="h4" className="dashboard-title">
          Dashboard
        </Typography>
        <CommonButton className="logout-button" onClick={handleLogout}>
          Logout
        </CommonButton>
        <CommonButton className="logout-button" onClick={handleReusablePage}>
          Reuseable page
        </CommonButton>
      </div>

      <Grid container spacing={3}>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.categoryId}>
              <Card className="category-card">
                <CardMedia
                  component="img"
                  height="160"
                  image={`https://ttdc.skeintech.com:8001/valueStreaks/buttons/getS3Details?key=${category.categoryImage}`}
                  alt={category.categoryName}
                  className="category-image"
                />
                <CardContent>
                  <Typography variant="h6">{category.categoryName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.shortDescription}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No categories found</Typography>
        )}
      </Grid>
    </div>
  );
};

export default Dashboard;

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CommonButton from "../components/CommonButton";
import { logoutUser } from "../logic/AuthLogic";
import { fetchCategories } from "../logic/categoryLogic";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate("/", { replace: true });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Typography variant="h4" className="dashboard-title">
          Dashboard
        </Typography>
        <CommonButton className="logout-button" onClick={handleLogout}>
          Logout
        </CommonButton>
      </div>

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && (
        <Grid container spacing={3} className="category-grid">
          {categories.map((cat) => (
            <Grid item xs={12} sm={6} md={4} key={cat.categoryId}>
              <Card className="category-card">
                <CardMedia
                  component="img"
                  height="160"
                  image={`https://ttdc.skeintech.com:8001/valueStreaks/buttons/getS3Details?key=${cat.categoryImage}`}
                  alt={cat.categoryName}
                  className="category-image"
                />
                <CardContent>
                  <Typography variant="h6">{cat.categoryName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cat.shortDescription}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

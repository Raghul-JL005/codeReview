import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ReusableData = () => {
  const { categories } = useSelector((state) => state.category);

  if (!categories || categories.length === 0) {
    return <Typography>No categories found</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {categories.map((category) => (
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
      ))}
    </Grid>
  );
};

export default ReusableData;

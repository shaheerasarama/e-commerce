import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import theme from "../../Theme/Theme";
import { Box } from "@mui/material";
import ProductRating from "../ProductRating/ProductRating";
export default function ProductCard({ product }) {
  let discount = (product.price * product.discountPercentage) / 100;
  // check for discount if exixt + stock + fav
  return (
    <Card
      sx={{
        // maxWidth: 350,
        boxShadow: "none",
        border: `1px solid ${theme.palette.primary.blackColor}`,
        // margin:' 0 auto',
      // height:'fit-content'
      }}
    >
      <CardMedia
        sx={{ height: 300 }}
        image={product.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box
          sx={{
            margin: "5px 0",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <ProductRating rating={product.rating} />
          <Typography sx={{ color: "#9ea1a9" }}>
            {product.reviews.length} Ratings
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            ${discount.toFixed(2)}
          </Typography>
          <Typography sx={{ textDecoration: "line-through" }}>
            ${product.price}
          </Typography>
          <Typography sx={{ fontWeight: "bold", color: "red" }}>
            {product.discountPercentage}% OFF
          </Typography>
        </Box>
        {/* {product.stock < 20 ? <>Only a few items left. Grab yours now!</> : ''} */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

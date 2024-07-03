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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  let discount =
    product.discountPercentage !== 0
      ? product.price - (product.price * product.discountPercentage) / 100
      : 0;
  return (
    <Link style={{textDecoration:'none'}} to={`/${product.category}/${product.id}`}>
    <Card
      sx={{
        // maxWidth: 350,
        boxShadow: "none",
        border: `1px solid ${theme.palette.primary.blackColor}`,
        // margin:' 0 auto',
        position: "relative",
        height:'100%'
      }}
    >
      {product.stock < 20 && (
        <Box
          sx={{
            position: "absolute",
            backgroundColor: theme.palette.primary.main,
            padding: "5px 10px",
            fontWeight: "500",
          }}
        >
          only a few items left!
        </Box>
      )}
      <CardMedia
        sx={{ height: 300, width: "100%" }}
        image={product.thumbnail}
        title={product.title}
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
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ProductRating rating={product.rating} />
          <Typography sx={{ color: "#9ea1a9" }}>
            {product.reviews.length} Ratings
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Typography
              sx={{
                textDecoration:
                  product.discountPercentage !== 0 ? "line-through" : "none",
              }}
            >
              ${product.price}
            </Typography>
            {product.discountPercentage !== 0 && (
              <>
                <Typography sx={{ fontWeight: "bold", color: "red" }}>
                  {product.discountPercentage}% OFF
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  ${discount.toFixed(2)}
                </Typography>
              </>
            )}
          </Box>
          <FavoriteBorderIcon />
          {/* This icon will show in case that this product in user`s Wishlist */}
          {/* <FavoriteIcon sx={{color:'#E72929'}}/> */}
        </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </Link>
  );
}

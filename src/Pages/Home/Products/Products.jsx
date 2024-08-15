import { Box, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../../components/Card/ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import theme from "../../../Theme/Theme";

export default function Products({ productsData }) {
  return (
    <Box sx={{ margin: "40px 0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "15px 0",
        }}
      >
        <Typography variant="h5" component="h5" sx={{ fontWeight: "500" }}>
          Products
        </Typography>
        <Link style={{ textDecorationLine: "none", color: "black" }} to="/products">
          <Typography
            sx={{
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "5px" }}>view all</span>
            <ArrowForwardIosIcon fontSize="small" />
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))",
          gap: "15px",
        }}
      >
        {productsData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Box>
    </Box>
  );
}

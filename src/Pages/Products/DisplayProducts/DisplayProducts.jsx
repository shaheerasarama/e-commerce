import { Box } from "@mui/material";
import React from "react";
import ProductCard from "../../../components/Card/ProductCard";

export default function DisplayProducts({ currentProducts }) {
  return (
    <Box sx={{ margin: "25px 0" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))",
          gap: "15px",
        }}
      >
        {currentProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Box>
    </Box>
  );
}

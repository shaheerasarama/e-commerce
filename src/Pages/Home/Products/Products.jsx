import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../../components/Card/ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

export default function Products({ productsData }) {
  return (
    <>
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
        <Link
          style={{ textDecorationLine: "none", color: "black" }}
          to="/products"
        >
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
      <Box sx={{ margin: "40px 0" }}>
        <Grid
          container
          sx={{
            flexWrap: "nowrap",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))",
            gap: "15px",
          }}
        >
          {(productsData.length === 0
            ? Array.from(new Array(10))
            : productsData
          ).map((item, index) => (
            <Box key={index}>
              {item ? (
                <ProductCard product={item} />
              ) : (
                <Skeleton variant="rectangular" width={270} height={118} />
              )}

              {item ? (
                <></>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
}

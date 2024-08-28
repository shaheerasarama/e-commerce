import { Box, Typography, Stack, Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import theme from "../../../Theme/Theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Categories({ categories }) {
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
          Categories
        </Typography>
        <Link style={{ textDecorationLine: "none", color: "black" }}>
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
      <Stack spacing={1} sx={{ margin: "30px 0" }}>
        {categories.length !== 0 ? (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
                gap: "15px",
                margin: "40px 0",
              }}
            >
              {categories.map((category, index) => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/${category}`}
                  key={index}
                >
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      textTransform: "capitalize",
                      padding: "25px 20px",
                      borderRadius: "10px",
                      textAlign: "center",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    {category}
                  </Box>
                </Link>
              ))}
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
                gap: "15px",
                margin: "40px 0",
              }}
            >
              {[...Array(30)].map((_, index) => (
                <Skeleton variant="rectangular" height={80} key={index} />
              ))}
            </Box>
          </>
        )}
      </Stack>
    </>
  );
}

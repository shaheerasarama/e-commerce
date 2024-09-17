import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./ProductReviews.module.css";
import theme from "./../../../Theme/Theme";
import { Box, Typography } from "@mui/material";
import ProductRating from "../../../components/ProductRating/ProductRating";
import ProductCard from "../../../components/Card/ProductCard";

export default function ProductReviews({ product, relatedProducts }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Tabs
      selectedIndex={selectedIndex}
      onSelect={handleTabSelect}
      style={{ margin: "15px 0" }}
    >
      <TabList
        style={{
          border: "none",
          backgroundColor: theme.palette.primary.blackColor,
          padding: "10px",
          borderRadius: "5px",
          display:'flex',
        }}
      >
        <Tab
          style={{
            border: "none",
            outline: "none",
            textTransform: "capitalize",
            cursor: "pointer",
            fontWeight: "500",
            backgroundColor:
              selectedIndex === 0 ? theme.palette.primary.main : "",
            borderRadius: selectedIndex === 0 ? "5px" : "",
            color: selectedIndex === 0 ? "black" : "white",
          }}
        >
          ratings and reviews
        </Tab>

        <Tab
          style={{
            border: "none",
            outline: "none",
            textTransform: "capitalize",
            cursor: "pointer",
            fontWeight: "500",
            backgroundColor:
              selectedIndex === 1 ? theme.palette.primary.main : "",
            borderRadius: selectedIndex === 1 ? "5px" : "",
            color: selectedIndex === 1 ? "black" : "white",
          }}
        >
          related products
        </Tab>
      </TabList>

      <TabPanel style={{ padding: "10px" }}>
        <Box>
          {product.reviews.map((review, index) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "15px 0",
              }}
              key={index}
            >
              <img
                src={require(`../../../images/avatar.png`)}
                alt=""
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
              <Box>
                <ProductRating rating={review.rating} />
                <Typography
                  sx={{
                    fontWeight: "500",
                    color: theme.palette.primary.textColor,
                  }}
                >
                  {review.reviewerName}
                </Typography>
                <Typography sx={{ fontWeight: "500" }}>
                  {review.comment}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </TabPanel>

      <TabPanel style={{ padding: "10px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
            gap: "15px",
          }}
        >
          {relatedProducts.map((relatedProduct, index) => (
            <ProductCard key={index} product={relatedProduct} />
          ))}
        </Box>
      </TabPanel>
    </Tabs>
  );
}

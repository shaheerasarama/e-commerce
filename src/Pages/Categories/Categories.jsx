import { Container, Grid, Box, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import HeroImg from "../../components/HeroImg/HeroImg";

export default function Categories() {
  let { categoryName } = useParams();
  const [products, setProducts] = useState(null);
  let { data } = useApi(
    `https://dummyjson.com/products/category/${categoryName}`
  );

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data]);

  return (
    <>
      <HeroImg />
      <Container>
        {products === null ? (
          <Grid
            container
            sx={{
              flexWrap: "nowrap",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))",
              gap: "15px",
            }}
          >
            {Array.from(new Array(10)).map((item, index) => (
              <Box key={index}>
                <Skeleton variant="rectangular" width={270} height={118} />
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
            ))}
          </Grid>
        ) : (
          <CategoryProducts productsData={products} />
        )}
      </Container>
    </>
  );
}

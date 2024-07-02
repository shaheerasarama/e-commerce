import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductDescription from "./ProductDescription/ProductDescription";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import ProductReviews from "./ProductReviews/ProductReviews";
export default function Product() {
  let { id } = useParams();
  let { data } = useApi(`https://dummyjson.com/products/${id}`);
  let [product, setProduct] = useState(null);
  useEffect(() => {
    if (data !== null) {
      setProduct(data);
    }
  }, [data]);
  return (
    <Container>
      {product === null ? (
        <Stack spacing={1} sx={{ margin: "30px 0" }}>
          {/* For variant="text", adjust the height via font-size */}
          {/* <Skeleton variant="text" sx={{ fontSize: "1rem" }} /> */}
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="rectangular" width={"100%"} height={450} />
        </Stack>
      ) : (
        <>
          <ProductDescription product={product}/>
          <ProductReviews product={product}/>
        </>
      )}
    </Container>
  );
}

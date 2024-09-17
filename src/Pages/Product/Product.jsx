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
  let { categoryName } = useParams();
  let { data } = useApi(`https://dummyjson.com/products/${id}`);
  let { data: categoriesProducts } = useApi(
    `https://dummyjson.com/products/category/${categoryName}`
  );
  let [product, setProduct] = useState(null);
  let [relatedProducts, setRelatedProducts] = useState(null);
  useEffect(() => {
    if (data !== null && categoriesProducts !== null) {
      setProduct(data);
      setRelatedProducts(
        categoriesProducts.products
          .filter((prod) => prod.id !== parseInt(id))
          .slice(0, 4)
      );
    }
  }, [data, categoriesProducts, id]);
  return (
    <Container>
      {product === null ? (
        <Stack spacing={1} sx={{ margin: "30px 0" }}>
          <Skeleton variant="rectangular" width={"100%"} height={450} />
        </Stack>
      ) : (
        <>
          {/* there is an error in console in this component */}
          <ProductDescription product={product} />
          <ProductReviews product={product} relatedProducts={relatedProducts} />
        </>
      )}
    </Container>
  );
}

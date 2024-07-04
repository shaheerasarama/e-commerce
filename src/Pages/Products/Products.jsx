import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroImg from "../../components/HeroImg/HeroImg";
import useApi from "../../Hooks/useApi";
import DisplayProducts from "./DisplayProducts/DisplayProducts";
import ProductsPagination from "./ProductsPagination/ProductsPagination";
export default function Products() {
  let [allProducts, setAllProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentProducts, setCurrentProducts] = useState([]);
  let { data } = useApi(`https://dummyjson.com/products?limit=0`);
  useEffect(() => {
    if (data != null) {
      setAllProducts(data.products);
    }
  }, [data]);

  useEffect(() => {
    if (allProducts != null) {
      const lastPostIndex = currentPage * productsPerPage;
      const firstPostIndex = lastPostIndex - productsPerPage;
      setCurrentProducts(allProducts.slice(firstPostIndex, lastPostIndex));
    }
  }, [allProducts, currentPage]);

  return (
    <Box>
      <HeroImg />
      {allProducts === null ? (
        <>waiting</>
      ) : (
        <Container>
          <DisplayProducts currentProducts={currentProducts} />
          <ProductsPagination
            allProductsLength={allProducts.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </Container>
      )}
    </Box>
  );
}

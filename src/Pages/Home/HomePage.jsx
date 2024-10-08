import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroImg from "../../components/HeroImg/HeroImg";
import useApi from "../../Hooks/useApi";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

export default function HomePage() {
  let [categories, setCategories] = useState([]);
  let [productsData, setProductsData] = useState([]);
  let [loading, setLoading] = useState(true);
  let { data } = useApi("https://dummyjson.com/products/category-list");
  let { data: allProducts } = useApi("https://dummyjson.com/products?limit=8");
  useEffect(() => {
    if (data !== null && allProducts !== null) {
      setCategories(data);
      setProductsData(allProducts.products);
    }
    setLoading(false);
  }, [data, allProducts]);
  return (
    <>
      <HeroImg />
      <Container>
        {!loading && (
          <>
            <Categories categories={categories} />
            <Products productsData={productsData} />
          </>
        )}
      </Container>
    </>
  );
}

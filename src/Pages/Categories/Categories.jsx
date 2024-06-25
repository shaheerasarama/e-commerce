import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";

export default function Categories() {
  let { categoryName } = useParams();
  const [products,setProducts] = useState(null);
  let { data } = useApi(
    `https://dummyjson.com/products/category/${categoryName}`
  );
  useEffect(()=>{
    if (data && data.products) {
        setProducts(data.products);
      }
    },[data])
    return (
    <Container>
      <div>home</div>
      {products === null ? <>waiting</> : <CategoryProducts productsData={products} />}
      
    </Container>
  );
}

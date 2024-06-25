import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import theme from "../../Theme/Theme";

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
      <>
      <div style={{textTransform:'capitalize',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:theme.palette.primary.main,height:'100px',fontWeight:'600',fontSize:'20px'}}>{categoryName}</div>
    <Container>
      {products === null ? <>waiting</> : <CategoryProducts productsData={products} />}
      
    </Container>
      </>
  );
}

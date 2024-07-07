import { Box, Container, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroImg from "../../components/HeroImg/HeroImg";
import useApi from "../../Hooks/useApi";
import DisplayProducts from "./DisplayProducts/DisplayProducts";
import ProductsPagination from "./ProductsPagination/ProductsPagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

export default function Products() {
  let [allProducts, setAllProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  let { data } = useApi(`https://dummyjson.com/products?limit=0`);
  let { data: categories } = useApi(
    `https://dummyjson.com/products/category-list`
  );
  const applySearch = async () => {
    let results = await axios.get(
      `https://dummyjson.com/products/search?limit=0&q=${search}`
    );
    setSearchResult(results.data.products);
  };

  const FilterSearch = (selectedSort, selectedFilter) => {
    let FilterResults = [...searchResult];
    if (selectedSort !== "") {
      switch (selectedSort) {
        case "lowestPrice":
          FilterResults = FilterResults.sort((a, b) => a.price - b.price);
          break;
        case "high":
          FilterResults = FilterResults.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          FilterResults = FilterResults.sort((a, b) => b.rating - a.rating);
          break;
        case "title":
          FilterResults = FilterResults.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          break;
      }

      if (selectedFilter !== "") {
        FilterResults = FilterResults.filter(
          (filterResult) => filterResult.category === selectedFilter
        );
      }
    }
    return FilterResults;
  };
  useEffect(() => {
    let debounceSearch = setTimeout(() => {
      applySearch();
    }, 300);
    return () => clearTimeout(debounceSearch);
  }, [search]);

  useEffect(() => {
    let finalResult = FilterSearch(sort, filter);
    setAllProducts(finalResult);
  }, [searchResult, sort, filter]);

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
      {allProducts === null || categories === null ? (
        <>waiting</>
      ) : (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{ flexGrow: 1 }}
                onKeyUp={(e) => setSearch(e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={6} md={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  label="Sort By"
                  onChange={(e) => setSort(e.target.value)}
                >
                  <MenuItem value={""}>Default</MenuItem>
                  <MenuItem value={"lowestPrice"}>Low to High</MenuItem>
                  <MenuItem value={"high"}>High to Low</MenuItem>
                  <MenuItem value={"rating"}>Most Rating</MenuItem>
                  <MenuItem value={"title"}>Product Title</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} md={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label="Filter By"
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <MenuItem sx={{ textTransform: "capitalize" }} value="">
                    Default
                  </MenuItem>
                  {categories.map((category, index) => (
                    <MenuItem
                      key={index}
                      sx={{ textTransform: "capitalize" }}
                      value={category}
                    >
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

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

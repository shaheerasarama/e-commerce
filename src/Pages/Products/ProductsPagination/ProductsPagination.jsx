import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from './ProductsPagination.module.css';
import theme from "../../../Theme/Theme";
export default function ProductsPagination({
  allProductsLength,
  productsPerPage,
  setCurrentPage,
}) {
  let pagesCount = Math.ceil(allProductsLength / productsPerPage);

  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "15px 0",
      }}
    >
      <Pagination
        count={pagesCount}
        variant="outlined"
        shape="rounded"
        onChange={(event, page) => setCurrentPage(page)}
        sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: theme.palette.primary.main,
              border:'1px solid black',
            }}}
      />
    </Stack>
  );
}

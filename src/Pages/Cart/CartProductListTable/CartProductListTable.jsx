import React, { useState } from "react";
import { useUserContext } from "../../../Contexts/UserContext";
import {
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import theme from "../../../Theme/Theme";
import ProductTableRow from "./ProductTableRow";

export default function CartProductListTable() {
  let { userCart } = useUserContext();
  let [qtyMsg, setQtyMsg] = useState("");
  return (
    <Container>
      <div role="presentation">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="›"
          sx={{ fontWeight: "500" }}
        >
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color={theme.palette.primary.blackColor}
            fontWeight="500"
            href="/"
          >
            Home
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color={theme.palette.primary.blackColor}
            href="/cart"
          >
            My Cart
          </Link>
        </Breadcrumbs>
      </div>
      <Typography
        variant="subtitle"
        component="div"
        sx={{
          color: theme.palette.primary.errorColor,
          fontWeight: "500",
          margin: "12px 0",
        }}
      >
        {qtyMsg}
      </Typography>
      <TableContainer component={Paper} sx={{ margin: "20px 0" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Qty</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Subtotal</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userCart.map((singleProduct, index) => (
              <ProductTableRow
                key={index}
                singleProduct={singleProduct}
                setQtyMsg={setQtyMsg}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

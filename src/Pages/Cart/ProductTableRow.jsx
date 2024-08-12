import React, { useEffect, useState } from "react";
import { Box, TableCell, TableRow, Button, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import theme from "../../Theme/Theme";
import { useUserContext } from "../../Contexts/UserContext";

export default function ProductTableRow({ singleProduct, setQtyMsg }) {
  let { updateFromCart, removeFromCart } = useUserContext();
  let [productQty, setProductQty] = useState(singleProduct.qty);
  let [productQtyChange, setProductQtyChange] = useState(0);
  // const [qtyMsg, setQtyMsg] = useState("");
  const price =
    singleProduct.product.discountPercentage === 0
      ? singleProduct.product.price
      : singleProduct.product.price -
        (singleProduct.product.price *
          singleProduct.product.discountPercentage) /
          100;
  const subtotal = price * singleProduct.qty;

  const HandleQtyChange = (qtyChange) => {
    if (
      qtyChange < 0 ||
      productQty + qtyChange > singleProduct.product.minimumOrderQuantity ||
      qtyChange + singleProduct.qty > singleProduct.product.minimumOrderQuantity
    ) {
      setQtyMsg(
        `You can't add more than ${singleProduct.product.minimumOrderQuantity} of this product`
      );
      setTimeout(() => {
        setQtyMsg("");
      }, 3000);
    } else {
      setProductQty(qtyChange + productQty);
    }
  };

  return (
    <>
      <TableRow
        key={singleProduct.product.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={singleProduct.product.images[0]} alt="" width="80px" />
            {singleProduct.product.title}
          </Box>
        </TableCell>
        <TableCell align="left">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid black",
              width: "100px",
            }}
          >
            <RemoveIcon
              onClick={() =>
                productQty !== 1 ? setProductQty(--productQty) : ""
              }
            />
            <input
              type="text"
              value={productQty}
              style={{ border: "none", width: "100%", textAlign: "center" }}
              readOnly
            />
            <AddIcon onClick={() => HandleQtyChange(++productQtyChange)} />
          </Box>
        </TableCell>
        <TableCell align="left">${price.toFixed(2)}</TableCell>
        <TableCell align="left">${subtotal.toFixed(2)}</TableCell>
        <TableCell align="left">
          <Button
            variant="text"
            sx={{ color: "#03346E" }}
            onClick={() => updateFromCart(singleProduct.product, productQty)}
          >
            Update
          </Button>
          <Button
            variant="text"
            sx={{ color: "#A70000" }}
            onClick={() => removeFromCart(singleProduct.product)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

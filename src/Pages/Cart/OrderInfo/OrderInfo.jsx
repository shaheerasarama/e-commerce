import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useUserContext } from "../../../Contexts/UserContext";
import theme from "../../../Theme/Theme";
import { Link } from "react-router-dom";

export default function OrderInfo() {
  let { userInfo, userCart, setUserCart } = useUserContext();
  let [confirmationMsg, setConfirmationMsg] = useState(false);
  let grandTotal = 0;
  userCart.map((singleProduct) => {
    const price =
      singleProduct.product.discountPercentage === 0
        ? singleProduct.product.price
        : singleProduct.product.price -
          (singleProduct.product.price *
            singleProduct.product.discountPercentage) /
            100;
    const subtotal = price * singleProduct.qty;
    grandTotal += subtotal;
  });

  let confirmationOrder = () => {
    setUserCart([]);
    setConfirmationMsg(true);
    setTimeout(() => {
      setConfirmationMsg(false);
    }, 8000);
  };
  if (userInfo !== null) {
    return (
      <Container sx={{ marginTop: "15px", marginBottom: "15px" }}>
        <Typography
          variant="h5"
          component="h5"
          sx={{ borderBottom: "1px solid #9ea1a9", marginBottom: "10px" }}
        >
          Order Information
        </Typography>
        <Box>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ marginBottom: "10px" }}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontWeight: "500", marginBottom: "10px" }}
              >
                Order Details
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  width: "50%",
                }}
              >
                <Typography variant="p" component="p">
                  Sub Total
                </Typography>
                <Typography variant="p" component="p">
                  ${grandTotal.toFixed(2)}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  width: "50%",
                }}
              >
                <Typography variant="p" component="p">
                  Delivery Fee
                </Typography>
                <Typography variant="p" component="p">
                  $20
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "5px",
                  width: "50%",
                }}
              >
                <Typography variant="p" component="p">
                  Grand Total
                </Typography>
                <Typography variant="p" component="p">
                  ${Number(grandTotal.toFixed(2)) + 20}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontWeight: "400", marginBottom: "10px" }}
              >
                Address Details
              </Typography>
              <Box>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ marginBottom: "5px" }}
                >
                  {userInfo.address.country}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ marginBottom: "5px" }}
                >
                  {userInfo.address.city}
                </Typography>
                <Box>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{ marginBottom: "5px" }}
                  >
                    {userInfo.address.address}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                <Button
                  disabled={userCart.length === 0}
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "black",
                  }}
                  onClick={confirmationOrder}
                >
                  Confirm Order
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "black",
                  }}
                >
                  <Link
                    to="/products"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Reorder
                  </Link>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {confirmationMsg && (
          <Typography
            sx={{
              marginTop: "20px",
              fontWeight: "bold",
              color: theme.palette.primary.main,
              backgroundColor: "black",
              padding: "8px",
              borderRadius: "10px",
              width: "fit-content",
            }}
          >
            Thank you for your order! <br></br> Your order has been confirmed.
            We’ll send you an email with the details shortly.
          </Typography>
        )}
      </Container>
    );
  }
}

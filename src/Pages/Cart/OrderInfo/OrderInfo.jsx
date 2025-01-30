import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import theme from "../../../Theme/Theme";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, ConfirmOrder } from "../../../Redux/actions/cartActions";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function OrderInfo() {
  let { data, loading } = useSelector((state) => state.user);
  let { cartItems } = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let [confirmationMsg, setConfirmationMsg] = useState(false);
  let grandTotal = 0;
  if (cartItems.length !== 0) {
    cartItems.map((singleProduct) => {
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
  }

  let confirmationOrder = () => {
    dispatch(ConfirmOrder());
    setConfirmationMsg(true);
    setTimeout(() => {
      setConfirmationMsg(false);
    }, 8000);
  };

  let clearCartItems = () => {
    dispatch(clearAll());
  };

  if (loading) {
    return (
      <Container>
        <Stack spacing={1} sx={{ margin: "10px 0" }}>
          <Skeleton variant="rectangular" width={"100%"} height={200} />
        </Stack>
      </Container>
    );
  }
  return (
    <>
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
                  $
                  {cartItems.length === 0 ? (
                    <>0</>
                  ) : (
                    <>{Number(grandTotal.toFixed(2)) + 20}</>
                  )}
                </Typography>
              </Box>
              <Button
                disabled={cartItems.length === 0}
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "black",
                }}
                onClick={confirmationOrder}
              >
                Confirm Order
              </Button>
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
                  {data?.address?.country}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ marginBottom: "5px" }}
                >
                  {data?.address?.city}
                </Typography>
                <Box>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{ marginBottom: "5px" }}
                  >
                    {data?.address?.address}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", marginTop: "10px" }}>
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
                <Button
                  variant="contained"
                  disabled={cartItems.length === 0}
                  sx={{
                    backgroundColor: theme.palette.primary.errorColor,
                    color: "black",
                  }}
                  onClick={clearCartItems}
                >
                  <Link style={{ color: "white", textDecoration: "none" }}>
                    Clear All
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
              width: "100%",
            }}
          >
            Thank you for your order! <br></br> Your order has been confirmed.
            We’ll send you an email with the details shortly.
          </Typography>
        )}
      </Container>
    </>
  );
}

import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ProductRating from "../../../components/ProductRating/ProductRating";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUserContext } from "../../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function ProductDescription({ product }) {
  const [minimumOrderQuantity, setMinimumOrderQuantity] = useState(1);
  const [qtyMsg, setQtyMsg] = useState("");
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  let { isLogin, addToCart } = useUserContext();
  let navigate = useNavigate();
  const maxSteps = product.images.length;

  const discount =
    product.discountPercentage !== 0
      ? product.price - (product.price * product.discountPercentage) / 100
      : 0;

  const HandleQtyChange = (qtyChange) => {
    if (qtyChange < 1 || qtyChange > product.minimumOrderQuantity) {
      setQtyMsg(
        `You can't add more than ${product.minimumOrderQuantity} of this product`
      );
      setTimeout(() => {
        setQtyMsg("");
      }, 3000);
    } else {
      setMinimumOrderQuantity(qtyChange);
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ margin: "30px 0px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 2,
                bgcolor: "background.default",
              }}
            ></Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {product.images.map((img, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 450,
                        display: "block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={img}
                      alt={`product image ${index}`}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                  sx={{ color: "black" }}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{ color: "black" }}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderBottom: `2px solid ${theme.palette.primary.greyColor}`,
            }}
          >
            <Typography variant="h4" component="h3" sx={{ fontWeight: "500" }}>
              {product.title}
            </Typography>
            <Typography
              variant="subtitle"
              component="p"
              sx={{ color: theme.palette.primary.textColor, margin: "12px 0" }}
            >
              {product.description}
            </Typography>
            <ProductRating rating={product.rating} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "12px 0",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography
                  sx={{
                    textDecoration:
                      product.discountPercentage !== 0
                        ? "line-through"
                        : "none",
                  }}
                >
                  ${product.price}
                </Typography>
                {product.discountPercentage !== 0 && (
                  <>
                    <Typography sx={{ fontWeight: "bold", color: "red" }}>
                      {product.discountPercentage}% OFF
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      ${discount.toFixed(2)}
                    </Typography>
                  </>
                )}
              </Box>
              {/* This icon will show in case that this product in user`s Wishlist */}
              {/* <FavoriteIcon sx={{color:'#E72929'}}/> */}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                margin: "12px 0",
              }}
            >
              {product.tags.map((tag, index) => (
                <Typography
                  key={index}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    padding: "5px 10px",
                    borderRadius: "8px",
                    textTransform: "capitalize",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Box>
            {product.stock < 20 && (
              <Typography
                variant="subtitle"
                component="p"
                sx={{
                  color: theme.palette.primary.errorColor,
                  fontWeight: "500",
                  margin: "12px 0",
                }}
              >
                Only a few items left!
              </Typography>
            )}
          </Box>
          <Box sx={{ margin: "12px 0" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Typography
                variant="subtitle"
                component="p"
                sx={{ fontWeight: "500" }}
              >
                Quantity :
              </Typography>
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
                  onClick={() => HandleQtyChange(minimumOrderQuantity - 1)}
                />
                <input
                  type="text"
                  value={minimumOrderQuantity}
                  style={{ border: "none", width: "100%", textAlign: "center" }}
                  readOnly
                />
                <AddIcon
                  onClick={() => HandleQtyChange(minimumOrderQuantity + 1)}
                />
              </Box>
            </Box>
            <Typography
              variant="subtitle"
              component="p"
              sx={{
                color: theme.palette.primary.errorColor,
                fontWeight: "500",
                margin: "12px 0",
              }}
            >
              {qtyMsg}
            </Typography>
            <Box sx={{ margin: "20px 0", display: "flex", gap: "20px" }}>
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: theme.palette.primary.blackColor,
                  color: "white",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.blackColor,
                    color: "white",
                  },
                  textWrap: "nowrap",
                }}
                onClick={() => {
                  if (!isLogin) {
                    navigate("/login");
                  } else {
                    addToCart(
                      product,
                      minimumOrderQuantity,
                      product.minimumOrderQuantity
                    );
                  }
                }}
              >
                <ShoppingBagIcon sx={{ fontSize: "20px" }} />
                <Typography
                  variant="subtitle"
                  component="span"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  add to cart
                </Typography>
              </Button>

              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "transparent",
                  color: "black",
                  boxShadow: "none",
                  border: "1px solid black",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    boxShadow: "none",
                  },
                  textWrap: "nowrap",
                }}
              >
                {/* Add FavoriteIcon if this product on user favs */}
                <FavoriteBorderIcon sx={{ fontSize: "20px" }} />
                <Typography
                  variant="subtitle"
                  component="span"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  add to wishlist
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

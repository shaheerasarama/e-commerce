import React from "react";
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
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export default function ProductDescription({ product }) {
  let discount =
    product.discountPercentage !== 0
      ? product.price - (product.price * product.discountPercentage) / 100
      : 0;
  const images = product.images;

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
              {images.map((img, index) => (
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
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    padding: "5px",
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
        </Grid>
      </Grid>
    </Box>
  );
}

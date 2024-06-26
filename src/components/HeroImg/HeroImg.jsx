import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import theme from "../../Theme/Theme";

export default function HeroImg() {
  return (
    <Container sx={{ marginTop: "25px", marginBottom: "25px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#F4F6F5",
          borderRadius: "25px",
          boxShadow: "0 0 10px #ddd",
          padding: "20px",
        }}
      >
        <Box className="text" sx={{ margin: { xs: "auto", md: "0" } }}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", fontSize: "4rem" }}
          >
            LET’S <br /> EXPLORE <br />{" "}
            <span
              style={{
                backgroundColor: theme.palette.primary.main,
                padding: "5px 15px",
                transform: "rotate(-2deg)",
                display: "inline-block",
              }}
            >
              UNIQUE
            </span>
            <br /> CLOTHES
          </Typography>
          <Typography sx={{ margin: "15px 0" }}>
            Live for Influential and Innovative fashion!
          </Typography>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.blackColor,
              color: "white",
              fontWeight: "400",
            }}
            variant="contained"
          >
            shop now
          </Button>
        </Box>
        <Box className="img">
          <Box
            component="img"
            src="/images/pink-clothes-dream-meaning-33-removebg-preview.png"
            alt="heroImg"
            sx={{
              width: "100%",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

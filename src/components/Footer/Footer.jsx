import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";
import theme from "../../Theme/Theme";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  let iconsStyle = {
    li: {
      width: "25px",
    },
    a: {
      color: theme.palette.primary.main,
      display: "flex",
      ustifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.blackColor,
        padding: "20px 0",
      }}
    >
      <Container>
        <Grid container sx={{ textAlign: "left" }}>
          <Grid
            xs={12}
            md={6}
            sx={{
              color: theme.palette.primary.whiteColor,
              marginBottom: "15px",
            }}
            item
          >
            <Typography
              variant="h6"
              sx={{
                letterSpacing: "0",
                textTransform: "uppercase",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              fashion
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                width: "80%",
                color: theme.palette.primary.textColor,
                lineHeight: "1.4",
                fontSize: "0.9rem",
                marginBottom:'20px'
              }}
            >
              Complete your style with awesome clothes from us.
            </Typography>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                padding: "0",
                alignItems: "center",
                gap: "0 10px",
              }}
            >
              <li style={iconsStyle.li}>
                <a href="/" style={iconsStyle.a}>
                  <FacebookRoundedIcon sx={iconsStyle.i} />
                </a>
              </li>
              <li style={iconsStyle.li}>
                <a href="/" style={iconsStyle.a}>
                  <InstagramIcon sx={iconsStyle.i} />
                </a>
              </li>
              <li style={iconsStyle.li}>
                <a href="/" style={iconsStyle.a}>
                  <TwitterIcon sx={iconsStyle.i} />
                </a>
              </li>
              <li style={iconsStyle.li}>
                <a href="/" style={iconsStyle.a}>
                  <LinkedInIcon sx={iconsStyle.i} />
                </a>
              </li>
            </ul>
          </Grid>
          <Grid container xs={12} md={6} item sx={{ color: "white" }}>
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.textColor,
                  fontSize: "1rem",
                  marginBottom: "15px",
                  fontWeight: "400",
                }}
              >
                Company
              </Typography>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                }}
              >
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    about
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    contact us
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    support
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    careers
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.textColor,
                  fontSize: "1rem",
                  marginBottom: "15px",
                  fontWeight: "400",
                }}
              >
                Quick Links
              </Typography>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                }}
              >
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    share location
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    orders tracking
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    Size Guide
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.primary.textColor,
                  fontSize: "1rem",
                  marginBottom: "15px",
                  fontWeight: "400",
                }}
              >
                Legal
              </Typography>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                }}
              >
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    Terms & conditions
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <a
                    href="/"
                    style={{
                      fontSize: "0.9rem",
                      color: theme.palette.primary.textColor,
                      textDecoration: "none",
                      textTransform: "capitalize",
                    }}
                  >
                    Privacy Policy us
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

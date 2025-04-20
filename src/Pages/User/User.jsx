import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Avatar } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";
import theme from "../../Theme/Theme";

export default function User() {
  const { data, loading } = useSelector((state) => state.user);

  if (loading) {
    return (
      <Container>
        <div>Loading...</div>
      </Container>
    );
  }
  return (
    <Box>
      <Container>
        <Grid container spacing={{ xs: 2, md: 0 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Avatar
              alt={data.firstName}
              src={data.image}
              sx={{ width: 100, height: 100, margin: { xs: "auto", md: "0" } }}
            ></Avatar>
            <Typography variant="h6" component="h4" sx={{ margin: "8px 0" }}>
              Personal Information
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ margin: "8px 0", textTransform: "capitalize" }}
            >
              {" "}
              weight : {data.weight}
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ margin: "8px 0", textTransform: "capitalize" }}
            >
              {" "}
              height : {data.height} Cm
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ margin: "8px 0", textTransform: "capitalize" }}
            >
              {" "}
              eyeColor : {data.eyeColor}
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ margin: "8px 0", textTransform: "capitalize" }}
            >
              {" "}
              hair : {data?.hair?.type} {data?.hair?.color}
            </Typography>
            <Typography
              variant="h6"
              component="h4"
              sx={{ margin: "8px 0", textTransform: "capitalize" }}
            >
              Address Information
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ margin: "8px 0", textTransform: "capitalize" }}
            >
              {" "}
              Country : {data?.address?.country}
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ margin: "8px 0", textTransform: "capitalize" }}
            >
              {" "}
              state : {data?.address?.state}
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ margin: "8px 0", textTransform: "capitalize" }}
            >
              {" "}
              city : {data?.address?.city}
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ margin: "8px 0", textTransform: "capitalize" }}
            >
              {" "}
              address : {data?.address?.address}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography variant="h6" component="h4" sx={{ margin: "8px 0" }}>
              Profile Information
            </Typography>
            <Box
              sx={{
                display: "inline-block",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: "32px",
                margin: { xs: "auto", md: "0" },
              }}
            >
              <Typography>
                {data.firstName} {data.lastName}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
                <LocationOnIcon
                  sx={{
                    fontSize: "14px",
                    color: theme.palette.primary.blackColor,
                  }}
                />
                <Typography
                  sx={{ fontSize: "12px", color: theme.palette.primary.main }}
                >
                  {data?.address?.state}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ margin: "8px 0" }}>
                {data?.company?.title}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ margin: "8px 0" }}>
                {data.age} Years old
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ margin: "8px 0" }}>{data.gender}</Typography>
            </Box>
            <Box>
              <Typography sx={{ margin: "8px 0" }}>{data.email}</Typography>
            </Box>
            <Box>
              <Typography sx={{ margin: "8px 0" }}>{data.phone}</Typography>
            </Box>
            <Box>
              <Typography sx={{ margin: "8px 0" }}>{data.birthDate}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

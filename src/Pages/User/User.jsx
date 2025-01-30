import { Box, Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

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
        <h1>User Details</h1>
        <p>{data.firstName}</p>
      </Container>
    </Box>
  );
}

/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const pages = ["Dashboard"];
const settings = ["Profile", "Account", "Logout"];
const Home = () => {
  const navigate = useNavigate();
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        component={Paper}
        sx={{ height: "100vh" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        elevation={8}
        overflow="auto"
      >
        <Stack spacing={4}>
          <Typography variant="h2" align="center" sx={{ color: "#3f4040" }}>
            Welcome to VOICE Management
          </Typography>
          <Typography variant="h4" align="center" sx={{ color: "#3f4040" }}>
            For the pleasure of Sri Sri NitaiGauranga
          </Typography>
          <Stack spacing={2} sx={{ mt: 8 }} flexGrow={1}>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#581ad6" }}
              startIcon={<LoginIcon />}
              onClick={() => navigate("/auth")}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              startIcon={<PersonAddIcon />}
              sx={{ borderColor: "#0fa632" }}
              size="large"
              onClick={() => navigate("/auth/signup")}
            >
              Signup
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;

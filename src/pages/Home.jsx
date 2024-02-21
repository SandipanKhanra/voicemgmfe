/* eslint-disable no-unused-vars */
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const pages = ["Dashboard"];
const settings = ["Profile", "Account", "Logout"];
const Home = () => {
  const navigate = useNavigate();
  return (
    <Box width="100vw" height="90vh">
      <Paper
        sx={{
          height: "50%",
          width: "40%",
          mx: "auto",
          backgroundColor: "#edf5f3",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{ pt: 4, color: "#3f4040" }}
        >
          Welcome to VOICE Management
        </Typography>
        <Grid
          container
          display="flex"
          justifyContent="center"
          sx={{ p: 2, mt: 4 }}
          spacing={2}
        >
          <Grid item>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#581ad6" }}
              startIcon={<LoginIcon />}
              onClick={() => navigate("/auth")}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<PersonAddIcon />}
              sx={{ borderColor: "#0fa632" }}
              size="large"
              onClick={() => navigate("/auth/signup")}
            >
              Signup
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home;

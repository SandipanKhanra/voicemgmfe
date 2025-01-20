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

  const user = [
    {
      id: "u1",
      name: "User 1",
      email: "user1@gmail.com",
    },
    {
      id: "u2",
      name: "User 2",
      email: "user2@gmail.com",
    },
    {
      id: "u3",
      name: "User 3",
      email: "user3@gmail.com",
    },
  ];
  return (
    // <Box
    //   style={{
    //     minHeight: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Box
    //     component={Paper}
    //     sx={{
    //       p: 4,
    //       width: { xs: "90%", sm: "80%", md: "60%" },
    //     }}
    //     elevation={4}
    //     overflow="auto"
    //   >
    //     <Stack spacing={4}>
    //       <Typography variant="h2" align="center" sx={{ color: "#3f4040" }}>
    //         Welcome to VOICE Management
    //       </Typography>
    //       <Typography variant="h4" align="center" sx={{ color: "#3f4040" }}>
    //         For the pleasure of Sri Sri NitaiGauranga
    //       </Typography>
    //       <Stack spacing={2} sx={{ mt: 8 }} flexGrow={1}>
    //         <Button
    //           variant="contained"
    //           size="large"
    //           sx={{ backgroundColor: "#581ad6" }}
    //           startIcon={<LoginIcon />}
    //           onClick={() => navigate("/auth")}
    //         >
    //           Login
    //         </Button>
    //         <Button
    //           variant="outlined"
    //           startIcon={<PersonAddIcon />}
    //           sx={{ borderColor: "#0fa632" }}
    //           size="large"
    //           onClick={() => navigate("/auth/signup")}
    //         >
    //           Signup
    //         </Button>
    //       </Stack>
    //     </Stack>
    //   </Box>
    // </Box>

    <ul>
      {user.map((user) => {
        return (
          <li key="user.id">
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;

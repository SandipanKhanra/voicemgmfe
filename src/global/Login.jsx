/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";
import {
  Form,
  json,
  Link,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { CircularProgress, Paper } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <span>
        {"Copyright © "}
        VOICE Management {new Date().getFullYear()}
        {"."}
      </span>
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login({ onLogin }) {
  console.log(process.env.NODE_ENV);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  const [loginData, setLoginData] = useState({});
  const [token, setToken] = useState();

  const isSubmitting = navigation.state === "submitting";

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          component={Paper}
          sx={{
            p: 2,
            m: "auto",
            width: { xs: "90%", sm: "80%", md: "70%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form method="post" action="/auth">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
        /> */}
            <LoadingButton
              type="submit"
              fullWidth
              loading={isSubmitting}
              loadingPosition="start"
              startIcon={<CircularProgress size={16} />}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isSubmitting ? "Logging In" : "Sign In"}
            </LoadingButton>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Link to="forgotpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Link to="signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Form>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:8000/api/v1";
  } else if (process.env.NODE_ENV === "production") {
    url = "https://voice-mgm.onrender.com/api/v1";
  }
  const response = await axios.post(`${url}/users/login`, authData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (`${response.status}`.startsWith("4")) {
    return response;
  }
  const token = response.data.token;
  localStorage.setItem("token", token);
  return redirect("/dashboard");
}

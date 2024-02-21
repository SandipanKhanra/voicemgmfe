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
import { Paper } from "@mui/material";

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
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();
  const [loginData, setLoginData] = useState({});
  const [token, setToken] = useState();

  const isSubmitting = navigation.state === "submitting";

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          component={Paper}
          sx={{
            marginTop: 8,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          {data && <Box></Box>}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
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
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await axios.post(
    "http://localhost:8000/api/v1/users/login",
    authData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (`${response.status}`.startsWith("4")) {
    return response;
  }
  const token = response.data.token;
  localStorage.setItem("token", token);
  return redirect("/dashboard");
}

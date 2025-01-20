/* eslint-disable no-undef */
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const data = useActionData();
  const navigation = useNavigation();
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
            p: { xs: 1, sm: 2, md: 4 },
            m: "auto",
            width: { xs: "90%", sm: "80%", md: "70%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data && console.log(data)}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Sign up
          </Typography>
          <Form method="post" action="/auth/signup" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  id="passwordConfirm"
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              loading={isSubmitting}
              variant="contained"
              sx={{ mt: 3, mb: 2, p: 2 }}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/auth">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Form>
          <Copyright sx={{ mt: 2 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const userData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    passwordConfirm: data.get("passwordConfirm"),
  };
  let url;
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:8000/api/v1";
  } else if (process.env.NODE_ENV === "production") {
    url = "https://voice-mgm.onrender.com/api/v1";
  }
  const response = await axios.post(`${url}/users/signup`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 400 || response.status === 401) {
    return response;
  }
  if (response.status === 500) {
    return response;
  }
  return redirect("/dashboard");
}

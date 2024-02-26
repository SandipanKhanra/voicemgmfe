import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const { response } = useRouteError();
  const navigate = useNavigate();
  let title = "An error occured";
  let message = response.statusText || "Something went wrong.";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="h1">{response.status}</Typography>
            <Typography variant="h4">{message}</Typography>
            <Button variant="contained" onClick={() => navigate("/")}>
              Back Home
            </Button>
          </Grid>
          {/* <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}

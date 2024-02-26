import { useNavigation } from "react-router-dom";
import SimpleBackdrop from "../global/SimpleBackdrop";
import { Box, Container, Paper, Typography } from "@mui/material";

function OverallCoordinator() {
  const navigation = useNavigation();
  return (
    <Container component="main" maxWidth="xl">
      {navigation.state === "loading" && <SimpleBackdrop open={true} />}
      <Box component={Paper} sx={{ height: "100vh", mt: 2 }}>
        <Typography variant="h2">OC</Typography>
      </Box>
    </Container>
  );
}

export default OverallCoordinator;

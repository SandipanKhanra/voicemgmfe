import { useNavigation } from "react-router-dom";
import SimpleBackdrop from "../global/SimpleBackdrop";
import { Box, Paper, Typography } from "@mui/material";

function OverallCoordinator() {
  const navigation = useNavigation();
  return (
    <Box component={Paper} sx={{ height: "100%", mt: 1 }}>
      {navigation.state === "loading" && <SimpleBackdrop open={true} />}
      <Typography variant="h2">OC</Typography>
    </Box>
  );
}

export default OverallCoordinator;

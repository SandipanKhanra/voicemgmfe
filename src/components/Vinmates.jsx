import { useNavigation } from "react-router-dom";
import SimpleBackdrop from "../global/SimpleBackdrop";
import { Box, Paper, Typography } from "@mui/material";

const Vinmates = () => {
  const navigation = useNavigation();
  return (
    <Box component={Paper} sx={{ height: "70%", mt: 1 }}>
      {navigation.state === "loading" && <SimpleBackdrop open={true} />}
      <Typography variant="h2">Voice inmate</Typography>
    </Box>
  );
};

export default Vinmates;

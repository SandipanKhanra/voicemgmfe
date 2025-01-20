/* eslint-disable no-unused-vars */
import { Box, Container, Grid, Paper } from "@mui/material";
import { useNavigation } from "react-router-dom";
import SimpleBackdrop from "../global/SimpleBackdrop";
import StatisticsCard from "./StatisticsCard";
import AssessmentIcon from "@mui/icons-material/Assessment";
const Admin = () => {
  const navigation = useNavigation();
  return (
    <Box component={Paper} sx={{ height: "100%" }}>
      {navigation.state === "loading" && <SimpleBackdrop open={true} />}
      <Grid container spacing={2} sx={{ p: 1, mt: 2 }}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticsCard
            icon={<AssessmentIcon fontSize="large" />}
            bgcolor="#4ca0f5"
            title="VOICE Count"
            count={12}
            label="Chant Hare Krishna"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticsCard
            icon={<AssessmentIcon fontSize="large" />}
            bgcolor="#f29b52"
            title="Preacher Count"
            count={72}
            label="Chant Hare Krishna"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticsCard
            icon={<AssessmentIcon fontSize="large" />}
            bgcolor="#58d16c"
            title="Imates Count"
            count={120}
            label="Chant Hare Krishna"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticsCard
            icon={<AssessmentIcon fontSize="large" />}
            bgcolor="#cc167d"
            title="Inmates Count"
            count={200}
            label="Chant Hare Krishna"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;

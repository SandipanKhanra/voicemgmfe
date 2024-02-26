/* eslint-disable no-unused-vars */
import { Box, Container, Grid, Paper } from "@mui/material";
import { useNavigation } from "react-router-dom";
import SimpleBackdrop from "../global/SimpleBackdrop";
import StatisticsCard from "./StatisticsCard";
import AssessmentIcon from "@mui/icons-material/Assessment";
const Admin = () => {
  const navigation = useNavigation();
  return (
    <Box>
      {navigation.state === "loading" && <SimpleBackdrop open={true} />}
      <Box
        component={Paper}
        sx={{ height: "100vh", mt: 2, bgcolor: "#edf0ed" }}
      >
        <Box sx={{ px: 2, mt: 1 }}>
          <Grid container spacing={3}>
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
                count={122}
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
      </Box>
    </Box>
  );
};

export default Admin;

/* eslint-disable react/prop-types */
import { Box, Card, Divider, Typography } from "@mui/material";

const StatisticsCard = ({ icon, title, count, bgcolor, label }) => {
  return (
    <Card sx={{ borderRadius: "0.5rem" }}>
      <Box display="flex" justifyContent="space-between" py={1} px={2}>
        <Box
          position="relative"
          variant="gradient"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          sx={{
            backgroundColor: bgcolor,
            color: "white",
            borderRadius: "0.5rem",
            boxShadow: 5,
          }}
        >
          {icon}
        </Box>
        <Box textAlign="right" lineHeight={1.25}>
          <Typography variant="button" fontWeight="light" color="text">
            {title}
          </Typography>
          <Typography variant="h3">{count}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box py={1} px={2}>
        <Typography component="p" variant="button" color="text" display="flex">
          <Typography
            component="span"
            variant="h6"
            fontWeight="bold"
            color="green"
          >
            {"%12"}
          </Typography>
          &nbsp;{label}
        </Typography>
      </Box>
    </Card>
  );
};

export default StatisticsCard;

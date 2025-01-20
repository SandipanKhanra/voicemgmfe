import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./ResponsiveAppBar";

const pages = ["Admin", "Preacher", "OC", "VInmate"];
const Dashboard = () => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <ResponsiveAppBar pages={pages} defaultValue="Admin" />
      <Outlet />
    </Box>
  );
};

export default Dashboard;

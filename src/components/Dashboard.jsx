import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

const pages = ["Admin", "Preacher", "OC", "VInmate"];
const Dashboard = () => {
  return (
    <>
      <ResponsiveAppBar pages={pages} defaultValue="Admin" />
      <Outlet />
    </>
  );
};

export default Dashboard;

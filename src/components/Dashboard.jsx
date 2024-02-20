import { Outlet } from "react-router-dom";

// import Sidenav from "../global/Sidenav";
import ResponsiveAppBar from "./ResponsiveAppBar";

const pages = ["Admin", "Preacher", "OC", "VInmate"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Dashboard = () => {
  return (
    <>
      <ResponsiveAppBar pages={pages} />
      <Outlet />
    </>
  );
};

export default Dashboard;

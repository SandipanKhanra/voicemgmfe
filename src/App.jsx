/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./components/Admin.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Preacher from "./components/Preacher.jsx";
import OverallCoordinator from "./components/OverallCoordinator.jsx";
import Vinmates from "./components/Vinmates.jsx";
import Home from "./pages/Home.jsx";
import { ColorModeContext, useMode } from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@emotion/react";
import { action as authAction } from "./global/Login.jsx";
import Login from "./global/Login.jsx";
import SignUp from "./global/SignUp.jsx";

function App() {
  const [theme, colorMode] = useMode();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        {
          path: "/auth",
          action: authAction,
          children: [
            { index: true, element: <Login /> },
            { path: "signup", element: <SignUp /> },
          ],
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "admin", element: <Admin /> },
        { path: "preacher", element: <Preacher /> },
        { path: "oc", element: <OverallCoordinator /> },
        { path: "vinmate", element: <Vinmates /> },
      ],
    },
  ]);
  return (
    <ColorModeContext.Provider value={ColorModeContext}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />;
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

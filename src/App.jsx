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
import { action as signupAction } from "./global/SignUp.jsx";
import { loader as loaderPreacherData } from "./components/Preacher.jsx";
import { action as voiceFormAction } from "./components/forms/VoiceRegistrationForm.jsx";
import { action as vinmateFormAction } from "./components/forms/VinmateRegistrationForm.jsx";
import Login from "./global/Login.jsx";
import SignUp from "./global/SignUp.jsx";
import Error from "./global/Error.jsx";
import VoiceRegistrationForm from "./components/forms/VoiceRegistrationForm.jsx";
import VinmateRegistrationForm from "./components/forms/VinmateRegistrationForm.jsx";

function App() {
  const [theme, colorMode] = useMode();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement: <Error />,
    },
    {
      path: "/auth",
      action: authAction,
      // errorElement: <Error />,
      children: [
        { index: true, element: <Login /> },
        { path: "signup", element: <SignUp />, action: signupAction },
        { path: "forgotpassword" },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      // errorElement: <Error />,
      children: [
        { path: "admin", element: <Admin /> },
        { path: "preacher", element: <Preacher />, loader: loaderPreacherData },
        { path: "oc", element: <OverallCoordinator /> },
        { path: "vinmate", element: <Vinmates /> },
      ],
    },
    {
      path: "/registration",
      // errorElement: <Error />,
      children: [
        {
          path: "voice",
          element: <VoiceRegistrationForm />,
          action: voiceFormAction,
        },
        {
          path: "vinmate",
          element: <VinmateRegistrationForm />,
          action: vinmateFormAction,
        },
      ],
    },
  ]);
  return (
    <ColorModeContext.Provider value={ColorModeContext}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

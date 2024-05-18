import { useRoutes } from "react-router-dom";
import Home from "./pages/LandingPage/Home";
import About from "./pages/LandingPage/About";
import DownloadApp from "./pages/LandingPage/DownloadApp";
import PrivacyPolicy from "./pages/LandingPage/PrivacyPolicy";
import Login from "./pages/LandingPage/Login";
import CreateAccount from "./pages/LandingPage/CreateAccount";


const Router = () => {
  return useRoutes([
    {
      path: '/',
      errorElement: <h2>Error Ocurred</h2>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/downloadApp',
          element: <DownloadApp />,
        },
        {
          path: '/privacyPolicy',
          element: <PrivacyPolicy />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/createAccount',
          element: <CreateAccount />,
        },
      ],
    },
    {
      path: '*',
      element: <h2>Page Not Found</h2>,
      errorElement: <h2>Error Ocurred</h2>,
    },
  ]);
  
};
export default Router;

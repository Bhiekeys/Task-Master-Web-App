import { useRoutes } from 'react-router-dom';
import Home from './pages/LandingPage/Home';
import Login from './pages/LandingPage/Login';
import CreateAccount from './pages/LandingPage/CreateAccount';
import DashboardLayout from './components/LayOut/DashboardLayout';
import All from './pages/Dashboard/All';
import ForgotPassword from './pages/LandingPage/ForgotPassword';
import Today from './pages/Dashboard/Today';
import Important from './pages/Dashboard/Important';
import Work from './pages/Dashboard/Work';
import Family from './pages/Dashboard/Family';
import Friends from './pages/Dashboard/Friends';

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
          path: '/login',
          element: <Login />,
        },
        {
          path: '/createAccount',
          element: <CreateAccount />,
        },
        {
          path: '/forgotPassword',
          element: <ForgotPassword />,
        },
        {
          element: <DashboardLayout />,
          children: [
            {
              path: '/dashboard/all',
              element: <All />,
            },
            {
              path: '/dashboard/today',
              element: <Today />,
            },
            {
              path: '/dashboard/important',
              element: <Important />,
            },
            {
              path: '/dashboard/work',
              element: <Work />,
            },
            {
              path: '/dashboard/family',
              element: <Family />,
            },
            {
              path: '/dashboard/friends',
              element: <Friends />,
            },
          ],
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

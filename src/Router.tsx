import { useRoutes } from 'react-router-dom';
import Home from './pages/LandingPage/Home';
import Login from './pages/LandingPage/Login';
import CreateAccount from './pages/LandingPage/CreateAccount';
import All from './pages/Dashboard/All';
import ForgotPassword from './pages/LandingPage/ForgotPassword';
import Today from './pages/Dashboard/Today';
import Important from './pages/Dashboard/Important';
import Work from './pages/Dashboard/Work';
import Family from './pages/Dashboard/Family';
import Friends from './pages/Dashboard/Friends';
import ConfirmEmail from './components/Auth/ConfirmEmail';
import NotFound from './pages/NotFound';
import PrivateRoute from './utils/PrivateRoute';
import ResetPassword from './pages/LandingPage/ResetPassword';

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
          path: '/auth/login',
          element: <Login />,
        },
        {
          path: '/auth/createAccount',
          element: <CreateAccount />,
        },
        {
          path: '/auth/forgotPassword',
          element: <ForgotPassword />,
        },
        {
          path: '/auth/resetPassword',
          element: <ResetPassword />,
        },
        {
          path: '/auth/confirmEmail',
          element: <ConfirmEmail />,
        },
        {
          element: <PrivateRoute />,
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
      element: <NotFound />,
      errorElement: <h2>Error Ocurred</h2>,
    },
  ]);
};
export default Router;

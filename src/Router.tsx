import { useRoutes } from 'react-router-dom';
import Home from './pages/LandingPage/Home';
import Login from './pages/LandingPage/Login';
import CreateAccount from './pages/LandingPage/CreateAccount';
import DashboardLayout from './components/LayOut/DashboardLayout';
import All from './pages/Dashboard/All';

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
          element: <DashboardLayout />,
          children: [
            {
              path: '/dashboard/all',
              element: <All />,
            },
            {
              path: '/dashboard/today',
              element: (
                <div className="flex h-screen  pt-[80px] justify-center items-center bg-[#F6F6F7] py-4 ">
                  TODAY HERE!!!!!
                </div>
              ),
            },
            {
              path: '/dashboard/important',
              element: (
                <div className="flex h-screen  pt-[80px] justify-center items-center bg-[#F6F6F7] py-4 ">
                  Important HERE!!!!!
                </div>
              ),
            },
            {
              path: '/dashboard/work',
              element: (
                <div className="flex h-screen  pt-[80px] justify-center items-center bg-[#F6F6F7] py-4 ">
                  WORK HERE!!!!!
                </div>
              ),
            },
            {
              path: '/dashboard/family',
              element: (
                <div className="flex h-screen  pt-[80px] justify-center items-center bg-[#F6F6F7] py-4 ">
                  FAMILY HERE!!!!!
                </div>
              ),
            },
            {
              path: '/dashboard/friends',
              element: (
                <div className="flex h-screen  pt-[80px] justify-center items-center bg-[#F6F6F7] py-4 ">
                  FRIENDS HERE!!!!!
                </div>
              ),
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

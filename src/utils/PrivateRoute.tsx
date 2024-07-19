import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/LayOut/DashboardLayout';
import { useUserAuthStore } from '../store/auth';

const PrivateRoute = () => {
  const isAuthenticated = useUserAuthStore((state) => !!state.token);

  return isAuthenticated ? (
    <DashboardLayout />
  ) : (
    <Navigate to="/auth/login" replace />
  );
};
export default PrivateRoute;

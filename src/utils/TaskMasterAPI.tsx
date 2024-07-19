import axios from 'axios';
import { isTokenValid } from './Helpers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserAuthStore } from '../store/auth';

const TaskMasterAPI = () => {
  let headers = {};

  const url = window.location.href;
  if (!url.includes('/auth')) {
    const token = useUserAuthStore.getState().token;
    if (token) {
      if (!isTokenValid(token)) {
        toast.error('Session expired,kindly login again');
        setTimeout(() => {
          toast.dismiss();
        }, 5000);
        sessionStorage.removeItem('user-auth-store');
        window.location.href = '/';
      }
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }
  }

  const baseURL = import.meta.env.VITE_REACT_APP_TASKMASTER_BASE_URL || '';
  const axiosInstance = axios.create({
    baseURL,
    timeout: 30000,
    headers,
  });

  return axiosInstance;
};

export default TaskMasterAPI;

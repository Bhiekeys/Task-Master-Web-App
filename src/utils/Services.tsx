import TaskMasterAPI from './TaskMasterAPI';

export const services = {
  signup: async (payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    return await TaskMasterAPI().post('auth/sign-up', payload);
  },
  login: async (payload: { email: string; password: string }) => {
    return await TaskMasterAPI().post('auth/login', payload);
  },
  forgotPassword: async (payload: { email: string }) => {
    return await TaskMasterAPI().post('auth/forgot-password', payload);
  },
  verifyOTP: async (payload: { email: string; otp: string }) => {
    return await TaskMasterAPI().post(
      `auth/verify-otp/${payload.email}`,
      payload
    );
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from 'react-helmet';
import background from '../../assets/background.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Controller,
  FieldErrors,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import PasswordInput from '../../constants/Reuseables/PasswordInput';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { services } from '../../utils/Services';
import { toast } from 'react-toastify';

type ResetPasswordProps = {
  password: string;
  confirmPassword: string;
};
const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, otpId } = location.state || {};

  const {
    formState: { isDirty, isValid },
    handleSubmit,
    control,
  } = useForm<ResetPasswordProps>();
  useEffect(() => {
    if (!email || !otpId) {
      console.error('Email or OTP ID is missing');
      navigate('/auth/forgotPassword'); // Redirect to forgot password page
    }
  }, [email, otpId, navigate]);

  const mutation = useMutation((data: ResetPasswordProps) =>
    services.resetPassword({ email, otpId }, data)
  );
  const onSubmitForm: SubmitHandler<ResetPasswordProps> = (data) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        // navigate('/auth/login'); // Adjust the redirect as necessary
      },
      onError: (error: any) => {
        toast.error(
          error?.response ? error?.response?.data?.message : error?.message
        );
      },
    });
  };
  const onInvalid = (errors: FieldErrors) => console.error(errors);
  return (
    <>
      <Helmet>
        <title>Task-Master | ResetPassword</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div className="w-full flex justify-between flex-col px-5 md:px-0 py-10 md:py-0">
          <Link
            to="/"
            className="text-white md:text-left  text-center text-2xl font-kadwa pb-7 md:ml-[98px] w-fit">
            Task Master
          </Link>
          <div className="flex justify-center">
            <div className="bg-white py-14 h-[487px] scrollbar-hide overflow-y-scroll max-w-[532px] w-full px-5 md:px-[45px] rounded-[10px] ">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="font-semibold text-xl">
                  Forgot your password??{' '}
                </h2>
                <p className="text-sm">Now set a New Password </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmitForm, onInvalid)}
                noValidate
                className=" ">
                <div className="flex items-center gap-3"></div>

                <Controller
                  name="password"
                  rules={{
                    required: 'password is required',
                  }}
                  control={control}
                  render={({ field }) => (
                    <PasswordInput
                      label="Enter New password"
                      id="password"
                      placeholder="password"
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="confirmPassword"
                  rules={{
                    required: 'confirm is required',
                  }}
                  control={control}
                  render={({ field }) => (
                    <PasswordInput
                      label="Confirm New password"
                      id="confirmPassword"
                      placeholder="confirm password"
                      {...field}
                    />
                  )}
                />

                <button
                  type="submit"
                  disabled={!isDirty || !isValid}
                  className={` w-full text-white py-3 rounded-[10px] mt-4 ${
                    !isDirty || !isValid
                      ? 'bg-green-200 cursor-not-allowed '
                      : 'bg-customGreen'
                  }`}>
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;

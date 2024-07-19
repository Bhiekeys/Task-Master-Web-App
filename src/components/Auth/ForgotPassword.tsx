/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '../../constants/Reuseables/Input';
import background from '../../assets/background.png';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { services } from '../../utils/Services';
import { toast } from 'react-toastify';

type ForgotPasswordProps = {
  email: string;
  otp: string;
};

const ForgotPassword = () => {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit, control, getValues } = useForm<ForgotPasswordProps>();
  const otpMutation = useMutation((data: { email: string }) =>
    services.forgotPassword(data)
  );
  const verifyOTP = useMutation((data: ForgotPasswordProps) =>
    services.verifyOTP(data)
  );

  const onSubmitEmail = () => {
    const email = getValues('email');
    otpMutation.mutate(
      { email },
      {
        onSuccess: (data) => {
          setIsCodeSent(true);
          toast.success(data?.data?.message);
        },
        onError: (error: any) => {
          toast.error(
            error?.response ? error?.response?.data?.message : error?.message
          );
        },
      }
    );
  };

  const onSubmitForm = (data: ForgotPasswordProps) => {
    verifyOTP.mutate(data, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        navigate('/auth/resetPassword'); 
      },
      onError: (error: any) => {
        toast.error(
          error?.response ? error?.response?.data?.message : error?.message
        );
      },
    });
    console.log('Final submission:', data);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the div covers the entire viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div className="w-full flex justify-between flex-col px-5 md:px-0 py-10 md:py-0">
        <Link
          to="/"
          className="text-white md:text-left text-center text-2xl font-kadwa pb-7 md:ml-[98px] w-fit">
          Task Master
        </Link>
        <div className="flex justify-center">
          <div className="bg-white pt-20 h-[527px] max-w-[532px] w-full px-5 md:px-[45px] rounded-[10px]">
            <div className="text-center mb-8 md:mb-12 grid justify-center">
              <h2 className="font-semibold text-xl">Forgot your password?</h2>
              <p className="text-sm max-w-[284px]">
                Don’t fret, we got you covered, just follow the instructions
                below.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(isCodeSent ? onSubmitForm : onSubmitEmail)}
              noValidate>
              <div className="relative">
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: 'Email is required' }}
                  render={({ field }) => (
                    <Input
                      label="Enter your email address"
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      {...field}
                    />
                  )}
                />
                <button
                  type="button"
                  disabled={isCodeSent}
                  onClick={onSubmitEmail}
                  className="absolute right-0 top-0 mt-9 text-customGreen text-xs py-2 px-4 rounded-r-[10px]">
                  {otpMutation.isLoading ? 'Sending . . .' : 'Send code'}
                </button>
              </div>

              <>
                <Controller
                  name="otp"
                  control={control}
                  rules={{ required: 'Code is required' }}
                  render={({ field }) => (
                    <Input
                      label="Enter Code"
                      id="code"
                      type="text"
                      placeholder="Enter code"
                      {...field}
                    />
                  )}
                />
                <button
                  type="submit"
                  disabled={!isCodeSent}
                  className={`w-full text-white py-3 rounded-[10px] mt-[31px] ${
                    !isCodeSent || verifyOTP.isLoading
                      ? 'bg-green-200 cursor-not-allowed'
                      : 'bg-customGreen'
                  }`}>
                  {verifyOTP.isLoading ? 'Processing . . .' : 'Reset'}
                </button>
              </>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

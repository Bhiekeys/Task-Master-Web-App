/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '../../constants/Reuseables/Input';
import PasswordInput from '../../constants/Reuseables/PasswordInput';
import background from '../../assets/background.png';
import { Link, useNavigate } from 'react-router-dom';
import { services } from '../../utils/Services';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import {
  Controller,
  FieldErrors,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useUserAuthStore } from '../../store/auth';

type LoginProps = {
  email: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  const updateUser = useUserAuthStore((state) => state.updateUser);
  const updateToken = useUserAuthStore((state) => state.updateToken);
  const mutation = useMutation((data: LoginProps) => services.login(data));
  const {
    formState: { isDirty, isValid },
    handleSubmit,
    control,
  } = useForm<LoginProps>();

  const onSubmitForm: SubmitHandler<LoginProps> = (data) => {
    const loginData = {
      ...data,
    };
    mutation.mutate(loginData, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        updateUser(data?.data?.data?.data);
        updateToken(data?.data?.data?.token);
        navigate('/dashboard/all')
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
          className="text-white md:text-left  text-center text-2xl font-kadwa pb-7 md:ml-[98px] w-fit">
          Task Master
        </Link>
        <div className="flex justify-center">
          <div className="bg-white  pt-20 h-[527px] max-w-[532px] w-full px-5 md:px-[45px] rounded-[10px]">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-semibold text-xl">Sign into your account</h2>
              <p className="text-sm">
                Don’t have an account yet?{' '}
                <Link to="/auth/createAccount" className="text-customGreen">
                  Sign Up Now
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmitForm, onInvalid)} noValidate>
              <Controller
                name="email"
                rules={{
                  required: 'email address is required',
                }}
                control={control}
                render={({ field }) => (
                  <Input
                    id="email"
                    label="Enter email address"
                    placeholder="email"
                    {...field}
                  />
                )}
              />
              <Controller
                name="password"
                rules={{
                  required: 'password is required',
                }}
                control={control}
                render={({ field }) => (
                  <PasswordInput
                    label="Set up a password"
                    id="password"
                    placeholder="password"
                    {...field}
                  />
                )}
              />
              <Link
                to="/auth/forgotPassword"
                className="block text-end text-xs text-customGreen">
                {' '}
                Forgot Password?
              </Link>
              <button
                type="submit"
                disabled={!isDirty || !isValid}
                className={` w-full text-white py-3 rounded-[10px] mt-4 ${
                  !isDirty || !isValid || mutation.isLoading
                    ? 'bg-green-200 cursor-not-allowed '
                    : 'bg-customGreen'
                }`}>
                {mutation.isLoading ? 'processing . . .' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

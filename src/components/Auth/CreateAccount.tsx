/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '../../constants/Reuseables/Input';
import PasswordInput from '../../constants/Reuseables/PasswordInput';
import background from '../../assets/background.png';
import { Link, useNavigate } from 'react-router-dom';
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldErrors,
} from 'react-hook-form';
import { useMutation } from 'react-query';
import { services } from '../../utils/Services';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

type SignUpProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const CreateAccount = () => {
  const navigate = useNavigate();
  const mutation = useMutation((data: SignUpProps) => services.signup(data));
  const [imageLoaded, setImageLoaded] = useState(false);

  const {
    formState: { isDirty, isValid },
    handleSubmit,
    control,
  } = useForm<SignUpProps>();
   useEffect(() => {
     const img = new Image();
     img.src = background;
     img.onload = () => {
       setImageLoaded(true);
     };
   }, []);
  const onSubmitForm: SubmitHandler<SignUpProps> = (data) => {
    const signupData = {
      ...data,
    };
    mutation.mutate(signupData, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        navigate('/auth/confirmEmail', { state: { email: signupData.email } });
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
      {imageLoaded ? (
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
              <div className="bg-white py-14 h-[527px] scrollbar-hide overflow-y-scroll max-w-[532px] w-full px-5 md:px-[45px] rounded-[10px] ">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="font-semibold text-xl">
                    Sign up for an account
                  </h2>
                  <p className="text-sm">
                    Already have an account?
                    <Link to="/auth/login" className="text-customGreen">
                      {' '}
                      Sign in
                    </Link>
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmitForm, onInvalid)}
                  noValidate
                  className=" ">
                  <div className="flex items-center gap-3">
                    <Controller
                      name="firstName"
                      rules={{
                        required: 'firstName address is required',
                      }}
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="firstName"
                          label="First name"
                          placeholder="first name"
                          {...field}
                        />
                      )}
                    />
                    <Controller
                      name="lastName"
                      rules={{
                        required: 'lastName address is required',
                      }}
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="lastName"
                          label="Last Name"
                          placeholder="Last Name"
                          {...field}
                        />
                      )}
                    />
                  </div>
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
                  <Controller
                    name="confirmPassword"
                    rules={{
                      required: 'confirm is required',
                    }}
                    control={control}
                    render={({ field }) => (
                      <PasswordInput
                        label="Confirm password"
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
                      !isDirty || !isValid || mutation.isLoading
                        ? 'bg-green-200 cursor-not-allowed '
                        : 'bg-customGreen'
                    }`}>
                    {mutation.isLoading ? 'processing . . .' : 'Sign Up'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          Loading ...
        </div>
      )}
    </>
  );
};
export default CreateAccount;

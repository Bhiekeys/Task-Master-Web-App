import Input from '../../constants/Reuseables/Input';
import PasswordInput from '../../constants/Reuseables/PasswordInput';
import background from '../../assets/background.png';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
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
          className="text-white md:text-left  text-center text-2xl font-kadwa pb-7 md:ml-[98px]">
          Task Master
        </Link>
        <div className="flex justify-center">
          <div className="bg-white pt-20 h-[527px]  max-w-[532px] w-full px-5 md:px-[45px] rounded-[10px] ">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-semibold text-xl">Sign up for an account</h2>
              <p className="text-sm">
                Already have an account?
                <Link to="/login" className="text-customGreen">
                  {' '}
                  Log in
                </Link>
              </p>
            </div>
            <form className="scrollbar-hide overflow-y-scroll h-[330px] ">
              <div className="flex items-center gap-3">
                <Input
                  label="First name"
                  id="firstName"
                  type="text"
                  placeholder="first name"
                />

                <Input
                  label="Last Name"
                  id="lastName"
                  type="text"
                  placeholder="last name"
                />
              </div>
              <Input
                label="Enter email address"
                id="email"
                type="email"
                placeholder="email address"
              />
              <PasswordInput
                label="Set up a password"
                id="password"
                placeholder="password"
              />
              <PasswordInput
                label="Confirm password"
                id="password"
                placeholder="password"
              />
              <span className="block text-end text-xs text-customGreen">
                {' '}
                Forgot Password?
              </span>
              <button
                type="submit"
                className="bg-customGreen w-full text-white py-3 rounded-[10px] mt-4">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;

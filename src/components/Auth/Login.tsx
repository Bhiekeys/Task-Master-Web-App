import Input from '../../constants/Reuseables/Input';
import PasswordInput from '../../constants/Reuseables/PasswordInput';
import background from '../../assets/background.png';
import { Link } from 'react-router-dom';
const Login = () => {
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
                <Link to="/createAccount" className="text-customGreen">
                  Sign Up Now
                </Link>
              </p>
            </div>
            <form>
              <Input
                label="Enter your email address"
                id="email"
                type="email"
                placeholder="Your email address"
              />
              <PasswordInput
                label="Enter your password"
                id="password"
                placeholder="Your password"
              />
              <span className="block text-end text-xs text-customGreen">
                {' '}
                Forgot Password?
              </span>
              <button
                type="submit"
                className="bg-customGreen w-full text-white py-3 rounded-[10px] mt-[31px]">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

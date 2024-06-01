import Input from '../../constants/Reuseables/Input';
import background from '../../assets/background.png';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/login');
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
          className="text-white md:text-left  text-center text-2xl font-kadwa pb-7 md:ml-[98px] w-fit">
          Task Master
        </Link>
        <div className="flex justify-center">
          <div className="bg-white  pt-20 h-[527px] max-w-[532px] w-full px-5 md:px-[45px] rounded-[10px]">
            <div className="text-center mb-8 md:mb-12 grid justify-center ">
              <h2 className="font-semibold text-xl ">Forgot your password??</h2>
              <p className="text-sm max-w-[284px]">
                Don’t fret, we got you covered, just follow the instructions
                below
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <Input
                  label="Enter your email address"
                  id="email"
                  type="email"
                  placeholder="Your email address"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 mt-9  text-customGreen text-xs py-2 px-4 rounded-r-[10px]">
                  send code
                </button>
              </div>
              <Input
                label="Enter Code"
                id="code"
                type="code"
                placeholder="Enter code"
              />

              <button
                type="submit"
                className="bg-customGreen w-full text-white py-3 rounded-[10px] mt-[31px]">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;

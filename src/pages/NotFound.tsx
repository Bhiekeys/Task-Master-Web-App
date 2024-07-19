import { useNavigate } from 'react-router-dom';
import notFound from '../assets/notfound.png';
const NotFound = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate('/');
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <img src={notFound} alt="404" />
      <div className="text-center">
        <p className="text-customGreen100 text-sm mt-[61px]">
          Dang! We hit our servers try reloading the page
        </p>
        <button
          type="button"
          onClick={home}
          className="bg-customGreen text-customPink text-xs py-2 px-4 rounded-md mt-5">
          Go Home
        </button>
      </div>
    </div>
  );
};
export default NotFound;

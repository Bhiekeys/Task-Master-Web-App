import { FaRegUser } from 'react-icons/fa6';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useUserAuthStore } from '../../../store/auth';
const Header = () => {
  const user = useUserAuthStore((state) => state.data);
  return (
    <>
      <div className=" flex justify-between items-center mt-3">
        <div>
          <h2 className="font-semibold text-xl">
            Hi {`${user?.firstName} ${user?.lastName}`}!
          </h2>
          <p className="text-sm">Saturday, 11th May, 2024.</p>
        </div>
        <div className="hidden md:flex items-center gap-3 justify-center">
          <IoNotificationsOutline className="text-[18px]" />
          <FaRegUser className="text-[22px] border border-customGreen rounded-full p-1" />
        </div>
      </div>
    </>
  );
};
export default Header;

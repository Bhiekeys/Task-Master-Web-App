import { FaRegUser } from 'react-icons/fa6';
import { IoNotificationsOutline } from 'react-icons/io5';
import ActiveState from './ActiveState';

const Head = () => {
  return (
    <div className="h-screen overflow-y-scroll px-4 md:px-0  md:pl-7 md:pr-5 scrollbar-hidden pt-[70px] md:pt-0 ">
      <div className=" flex justify-between items-center mt-3">
        <div>
          <h2 className="font-semibold text-xl">Hi Olabode!</h2>
          <p className="text-sm">Saturday, 11th May, 2024.</p>
        </div>
        <div className="hidden md:flex items-center gap-3 justify-center">
          <IoNotificationsOutline className="text-[18px]" />
          <FaRegUser className="text-[22px] border border-customGreen rounded-full p-1" />
        </div>
      </div>
      
      <ActiveState />
    </div>
  );
};
export default Head;

import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { sidebarData } from '../../constants/SideBarData';
import { MdOutlineLogout } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import Modal from '../../constants/Reuseables/Modal';
import { useUserAuthStore } from '../../store/auth';

const Header = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const clearStore = useUserAuthStore((state) => state.clearToken);
  const openLogoutModal = () => {
    setShow(false);
    setLogoutModal(true);
  };
  const closeLogoutModal = () => {
    setLogoutModal(false);
  };

  const handleLogout = () => {
    clearStore();
    sessionStorage.removeItem('user-auth-store');
    navigate('/auth/login');
  };

  const showHandler = () => {
    setShow(!show);
  };
  const showContent = () => {
    setShow(false);
  };
  return (
    <div
      className={`${
        show && 'rounded-b-3xl pb-6'
      }  bg-white py-3  z-10 fixed  w-full px-3 shadow-lg `}>
      <div className={`flex justify-between items-center w-full `}>
        <div>
          {show ? (
            <GrClose className="text-[30px]" onClick={showHandler} />
          ) : (
            <AiOutlineMenu className="text-[28px]" onClick={showHandler} />
          )}
        </div>

        <Link to="/" className="text-customGreen text-2xl font-bold font-kadwa">
          Task Master
        </Link>
        <div className="flex items-center gap-1">
          <IoNotificationsOutline className="text-[18px]" />
          <FaRegUser className="text-[24px] border border-customGreen rounded-full p-1" />
        </div>
      </div>

      {/* Navbar links for small screens */}
      <div
        className={`pb-5 pt-10 ${
          show ? 'flex flex-col space-y-5 w-full' : 'hidden'
        }`}>
        {sidebarData.map((nav) => {
          const { text, icon, id, url } = nav;
          return (
            <NavLink
              key={id}
              to={url}
              onClick={showContent}
              className={({ isActive }) =>
                isActive
                  ? 'text-customGreen flex items-center gap-3 underline underline-offset-4 decoration-[1px] decoration-customGreen '
                  : 'font-medium hover:text-customGreen flex items-center gap-3'
              }>
              <span className={`text-xl text-customGreen `}>{icon}</span>
              <p
                style={{ transitionDelay: `${id + 1}00ms` }}
                className={`whitespace-pre duration-200 text-base font-semibold`}>
                {text}
              </p>
            </NavLink>
          );
        })}

        <button
          onClick={openLogoutModal}
          className={
            'font-medium hover:text-customGreen flex items-center gap-3'
          }>
          <MdOutlineLogout className="text-xl text-customGreen " />

          <p className={`whitespace-pre duration-200 text-base font-semibold`}>
            Logout
          </p>
        </button>
      </div>
      {logoutModal && (
        <Modal
          isOpen={logoutModal}
          onClose={closeLogoutModal}
          onConfirm={handleLogout}
          title="Are you sure you want to Log Out?"
          cancelButtonText="No"
          confirmButtonText="Logout"
        />
      )}
    </div>
  );
};
export default Header;

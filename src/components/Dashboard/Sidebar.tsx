/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { sidebarData } from '../../constants/SideBarData';
import { CiMenuBurger } from 'react-icons/ci';
import { MdOutlineLogout } from 'react-icons/md';
import Modal from '../../constants/Reuseables/Modal';
import { useUserAuthStore } from '../../store/auth';
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(window.innerWidth > 850);
  const [toggled, setToggled] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const clearStore = useUserAuthStore((state) => state.clearToken);
  const openLogoutModal = () => {
    setLogoutModal(true);
  };
  const closeLogoutModal = () => {
    setLogoutModal(false);
  };
  const isActive = (url: any) => {
    return location.pathname === url || location.pathname.startsWith(`${url}/`);
  };
  const handleLogout = () => {
    clearStore();
    sessionStorage.removeItem('user-auth-store');
    navigate('/auth/login');
  };
  const toggle = () => {
    setIsOpen(!isOpen);
    setToggled(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 850);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="hidden md:flex h-screen z-50 ">
        <div
          className={`${
            isOpen ? 'w-64' : 'w-16 '
          }  duration-500 bg-white z-20 px-4 lg:w-80 flex-shrink-0 fixed h-full  shadow-[4px_4px_20px_#0000000D]`}>
          <div className={`flex items-center mb-9 mt-7 gap-4 `}>
            <button
              className={`lg:hidden ${toggled && isOpen ? 'ml-3 ' : ''}`}
              onClick={toggle}>
              <CiMenuBurger className="text-xl" />
            </button>

            <div>
              {isOpen && (
                <p className=" text-customGreen text-2xl font-bold font-kadwa  ">
                  Task Master
                </p>
              )}
            </div>
          </div>

          <div
            className="scrollbar-hide overflow-y-auto  overflow-x-hidden"
            style={{ maxHeight: 'calc(100vh - 118px)' }}>
            {sidebarData.map((nav) => {
              const { text, icon, id, url } = nav;
              return (
                <div key={id} className="mb-2">
                  <NavLink
                    to={url}
                    className={` group flex items-center text-sm py-2  capitalize gap-[18px]  ${
                      isOpen && 'px-3'
                    }   transition-all ${
                      isActive(url) &&
                      'bg-customGreen text-white  font-medium text-base rounded-[4px]'
                    }`}>
                    <span
                      className={`text-xl text-customGreen ${
                        isActive(url) && 'text-white '
                      }`}>
                      {icon}
                    </span>
                    <p
                      style={{ transitionDelay: `${id + 1}00ms` }}
                      className={`whitespace-pre duration-200 text-base font-semibold`}>
                      {text}
                    </p>
                  </NavLink>
                </div>
              );
            })}
            <div className="font-bold text-xl text-customGreen100 bg-custom-gradient py-7 px-6 rounded-[10px] flex flex-col gap-4 items-center">
              <p>
                Get hold of<span className="text-customPink"> TaskMaster</span>{' '}
                full touch
              </p>
              <button
                type="button"
                className="bg-customGreen100 max-w-[140px] w-full py-2 text-sm font-medium text-white rounded-[10px]">
                Go pro
              </button>
            </div>
            <div className="py-2 mt-4">
              <div className="flex items-center ml-3 gap-[18px] cursor-pointer font-medium text-base ">
                <MdOutlineLogout className="text-customGreen " />
                <p onClick={openLogoutModal}>Logout</p>
              </div>
            </div>
          </div>
        </div>
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
export default Sidebar;

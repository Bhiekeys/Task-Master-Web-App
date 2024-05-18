import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { navs } from '../../constants/HomeNavData';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showContent = () => {
    setShow(false);
  };

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <div
      className={`${
        show && 'rounded-b-3xl pb-6 shadow-lg'
      } flex flex-col lg:flex-row bg-white py-5 md:py-7 items-center sm:justify-between justify-around z-10 fixed  w-full px-5 lg:px-0  `}>
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="hidden lg:flex text-customGreen text-2xl pl-[72px] font-bold font-kadwa">
        Task Master
      </ScrollLink>

      <div className={`lg:hidden flex justify-between items-center w-full `}>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className=" text-customGreen text-2xl font-bold font-kadwa">
          Task Master
        </ScrollLink>
        <div className="lg:hidden ml-3 md:ml-0">
          {show ? (
            <GrClose className="text-[30px]" onClick={showHandler} />
          ) : (
            <AiOutlineMenu className="text-[30px]" onClick={showHandler} />
          )}
        </div>
      </div>

      {/* Navbar links for small screens */}
      <div
        className={`lg:hidden  ${
          show ? 'flex flex-col space-y-5 w-full my-4' : 'hidden'
        }`}>
        {navs.map((nav) => {
          const { id, url, text } = nav;
          return (
            <ScrollLink
              key={id}
              to={url}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={showContent}
              className="text-black text-sm hover:text-customGreen"
              // className={({ isActive }) =>
              //   isActive
              //     ? 'text-customGreen text-sm underline underline-offset-4  '
              //     : 'text-black text-sm hover:text-customGreen '
              // }
            >
              {text}
            </ScrollLink>
          );
        })}
        <NavLink
          to="/login"
          onClick={showContent}
          className={({ isActive }) =>
            isActive
              ? 'text-customGreen text-sm underline underline-offset-4 decoration-[1px] decoration-customGreen '
              : 'text-black text-sm  hover:text-customGreen '
          }>
          Log in
        </NavLink>
        <NavLink
          to="/createAccount"
          onClick={showContent}
          className={({ isActive }) =>
            isActive
              ? 'text-customGreen text-sm underline underline-offset-4 decoration-[1px] decoration-customGreen '
              : 'text-black text-sm  hover:text-customGreen '
          }>
          Create Account
        </NavLink>
      </div>

      {/* Navbar links for large screens */}
      <div className="hidden lg:flex items-center space-x-[155px] ">
        <div className="flex gap-11 items-center">
          {navs.map((nav) => {
            const { id, url, text } = nav;
            return (
              <ScrollLink
                to={url}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                key={id}
                className="text-black hover:text-customGreen text-sm"
                // className={({ isActive }) =>
                //   isActive
                //     ? 'font-semibold text-customGreen text-sm'
                //     : 'text-black hover:text-customGreen text-sm'
                // }
              >
                {text}
              </ScrollLink>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-5 pr-5">
          <RouterLink to="/login">
            <button
              type="button"
              className="font-bold text-sm text-customGreen ">
              Log in
            </button>
          </RouterLink>
          <RouterLink to="/createAccount">
            <button
              type="button"
              className="text-customPink bg-customGreen py-3 px-8 rounded-[10px]">
              Create Account
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

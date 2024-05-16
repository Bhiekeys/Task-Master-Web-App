import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { navs } from '../../constants/HomeNavData';

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
      } flex flex-col lg:flex-row bg-white py-7 items-center sm:justify-between justify-around z-10 fixed  w-full px-5 lg:px-0  `}>
      <Link
        to="/"
        className="hidden lg:flex text-customGreen text-2xl pl-[72px] font-bold">
        Task Master
      </Link>

      <div
        className={`lg:hidden flex justify-between items-center w-full mb-5`}>
        <Link to="/" className=" text-customGreen text-2xl font-bold">
          Task Master
        </Link>
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
            <NavLink
              key={id}
              to={url}
              onClick={showContent}
              className={({ isActive }) =>
                isActive
                  ? 'text-customGreen text-sm underline underline-offset-4  '
                  : 'text-black text-sm hover:text-customGreen '
              }>
              {text}
            </NavLink>
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
              <NavLink
                key={id}
                to={url}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-customGreen text-sm'
                    : 'text-black hover:text-customGreen text-sm'
                }>
                {text}
              </NavLink>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-5 pr-5">
          <Link to="/login">
            <button
              type="button"
              className="font-bold text-sm text-customGreen ">
              Log in
            </button>
          </Link>
          <Link to="/createAccount">
            <button
              type="button"
              className="text-customPink bg-customGreen py-3 px-8 rounded-[10px]">
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

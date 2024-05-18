import { Link } from 'react-router-dom';
import stars from '../../assets/stars.png';
import playstore from '../../assets/playstore2.svg';
import playstore1 from '../../assets/playstore.svg';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdOutlineFacebook } from 'react-icons/md';
import { SlSocialInstagram } from 'react-icons/sl';
const Footer = () => {
  return (
    <div
      id="privacyPolicy"
      className="flex items-center flex-col md:flex-row justify-between pt-6 pb-10 px-5 md:px-0">
      <div className="flex flex-col md:flex-row text-center md:text-left  md:space-x-16 md:ml-20">
        <div>
          <p className="text-customGreen text-2xl font-bold font-kadwa">
            Task Master
          </p>
          <p className="max-w-[204px] text-sm mt-1 md:mt-0">
            A to-do web app that allows you stay organized and plan orderly
          </p>
          <div className=" mb-7 md:mb-0">
            <p className="font-semibold text-base mt-[26px]">
              {' '}
              Follow us on our socials
            </p>
            <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
              <MdOutlineFacebook className="w-5" />
              <SlSocialInstagram className="w-3" />
              <FaSquareXTwitter className="w-5" />
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl my-2 md:my-0">Navigation</p>
          {navs.map((nav) => {
            const { id, text, url } = nav;
            return (
              <div key={id} className="mb-1">
                <Link to={url} className="text-sm">
                  {text}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <p className="font-semibold text-xl my-2 md:my-0">Privacy</p>
          {privacies.map((privacy) => {
            const { id, text, url } = privacy;
            return (
              <div key={id} className="mb-1">
                <Link to={url} className="text-sm ">
                  {text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center md:items-end md:mr-[26px] ">
        <p className="text-[11px] text-center md:text-left my-3 md:my-0">
          Suscribe to our newsletter and stay up to date on any new feature.
        </p>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="outline-none md:h-[47px] h-10 px-2 max-w-[160px] md:max-w-[190px] rounded-l-[10px] border border-lightBlack100"
          />
          <button
            type="button"
            className="md:h-[47px] text-[13px] px-4 h-10 bg-customGreen text-white rounded-r-[10px]">
            Subscribe
          </button>
        </div>
        <div className="hidden md:flex justify-center flex-col items-center">
          <p className="text-xl font-semibold">
            Download our mobile application
          </p>
          <img src={stars} alt="rating" className="py-2" />
          <div className=" space-x-4 flex items-center">
            <button
              type="button"
              className="bg-black text-white flex items-center max-w-[214px] h-[69px] px-5 rounded-[10px] space-x-2">
              <img src={playstore} alt="playstoreIcon" />
              <span> Google Playstore</span>
            </button>
            <button
              type="button"
              className="bg-black text-white flex items-center max-w-[214px] h-[69px] px-5 rounded-[10px] space-x-2">
              <img src={playstore1} alt="playstoreIcon" />
              <span> Google Playstore</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

const navs = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'Log in',
    url: '/login',
  },
  {
    id: 3,
    text: 'Sign Up',
    url: '/createAccount',
  },
  {
    id: 4,
    text: 'About Us',
    url: '/about',
  },
];

const privacies = [
  {
    id: 1,
    text: 'Privacy',
    url: '',
  },
  {
    id: 2,
    text: 'Policy',
    url: '',
  },
  {
    id: 3,
    text: 'Terms',
    url: '',
  },
  {
    id: 4,
    text: 'Conditions',
    url: '',
  },
];

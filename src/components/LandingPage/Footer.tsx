import { Link } from 'react-router-dom';
import stars from '../../assets/stars.png';
import playstore from '../../assets/playstore2.svg';
import playstore1 from '../../assets/playstore.svg';
const Footer = () => {
  return (
    <div className="flex items-center justify-between pt-6 pb-10">
      <div className="flex space-x-16 ml-20">
        <div>
          <p className="text-customGreen text-2xl font-bold">Task Master</p>
          <p className="max-w-[204px]">
            A to-do web app that allows you stay organized and plan orderly
          </p>
          <div>
            <p className="font-semibold text-base mt-[26px]">
              {' '}
              Follow us on our socials
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl">Navigation</p>
          {navs.map((nav) => {
            const { id, text, url } = nav;
            return (
              <div key={id}>
                <Link to={url} className="text-base">
                  {text}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <p className="font-semibold text-xl">Privacy</p>
          {privacies.map((privacy) => {
            const { id, text, url } = privacy;
            return (
              <div key={id}>
                <Link to={url} className="text-base">
                  {text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-end mr-[26px]">
        <p className="text-[11px]">
          Suscribe to our newsletter and stay up to date on any new feature.
        </p>
        <div className="flex items-center">
          <input
            type="text"
            className="outline-none h-[47px] px-2 rounded-l-[10px] border border-lightBlack100"
          />
          <button
            type="button"
            className="h-[47px] px-4 bg-customGreen text-white rounded-r-[10px]">
            Subscribe
          </button>
        </div>
        <p className='text-xl font-semibold'>Download our mobile application</p>
        <img src={stars} alt="rating" />
        <div className="mt-[27px] space-x-4 flex items-center">
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

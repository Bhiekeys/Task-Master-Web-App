import dashboard from '../../../assets/dashboardImage.png';
import Footer from '../Footer';
import AboutApp from './AboutApp';
import MobileAdvert from './MobileAdvert';
import Purpose from './Purpose';
import Reviews from './Reviews';
import TaskMaster from './TaskMaster';

const Banner = () => {
  return (
    <>
      <div
        id="home"
        className="md:pt-[120px] pt-24  flex justify-center items-center text-center">
        <div className="max-w-[738px] px-5 md:px-0 ">
          <h1 className="text-2xl md:text-[40px] font-bold md:font-semibold leading-10 md:leading-[53px]">
            Stay <span className="text-customGreen">Organized</span> and get
            your
            <span className="text-customGreen"> day-to-day </span>
            activities sorted out in a more orderly manner.
          </h1>
          <p className="text-sm my-5 md:my-9">
            Be part of the most organized and efficient people on earth by using
            the TaskMaster
          </p>
          <div className="space-x-5 sm:space-x-10">
            <button
              type="button"
              className="bg-customGreen text-white font-medium py-3 md:py-4 md:px-[18px] px-2 rounded-[20px] text-xs">
              Create Account
            </button>
            <button
              type="button"
              className="border border-customGreen100 font-medium text-customGreen py-3 md:py-4 px-2 rounded-[20px] text-xs">
              Download Our App
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-9 px-5 lg:px-0">
        <img src={dashboard} alt="dashboardImage" />
      </div>
      <AboutApp />
      <Purpose />
      <MobileAdvert />
      <Reviews />
      <TaskMaster />
      <Footer />
    </>
  );
};
export default Banner;

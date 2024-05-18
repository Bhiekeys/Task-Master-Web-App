import iphone from '../../../assets/iPhone.png';
import stars from '../../../assets/stars.png';
import playstore from '../../../assets/playstore2.svg';
import playstore1 from '../../../assets/playstore.svg';
const MobileAdvert = () => {
  return (
    <div className="md:py-[99px] py-14 flex flex-col md:flex-row px-5 md:px-0 items-center justify-center border-b border-lightBlack ">
      <div className="">
        <img src={iphone} alt="phone" />
      </div>
      <div className="flex flex-col justify-center items-center text-center md:block md:text-left mt-5 md:mt-0">
        <p className="font-semibold text-2xl md:text-4xl">
          We now have a Mobile App{' '}
        </p>
        <p className="max-w-[337px] text-sm md:text-xl my-4">
          Download our mobile app from your app store and get reminders about
          your fixed plan for the day. use anywhere, anytime.
        </p>
        <img src={stars} alt="rating" />
        <div className="mt-[27px] space-x-4 flex items-center ">
          <button
            type="button"
            className="bg-black text-white text-xs md:text-sm flex items-center max-w-[214px] h-[69px] px-2 md:px-5 rounded-[10px] space-x-1 md:space-x-2">
            <img src={playstore} alt="playstoreIcon" className="w-5 md:w-10" />
            <span> Google Playstore</span>
          </button>
          <button
            type="button"
            className="bg-black text-white text-xs md:text-sm  flex items-center max-w-[214px] h-[69px] px-2 md:px-5 rounded-[10px] space-x-1 md:space-x-2">
            <img src={playstore1} alt="playstoreIcon" className="w-5 md:w-10" />
            <span> Google Playstore</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MobileAdvert;

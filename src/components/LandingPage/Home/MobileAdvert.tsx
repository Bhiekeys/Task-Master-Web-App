import iphone from '../../../assets/iPhone.png';
import stars from '../../../assets/stars.png';
import playstore from '../../../assets/playstore2.svg';
import playstore1 from '../../../assets/playstore.svg';
const MobileAdvert = () => {
  return (
    <div className="py-[99px] flex items-center justify-center border-b border-lightBlack ">
      <img src={iphone} alt="" />
      <div>
        <p className="font-semibold text-4xl">We now have a Mobile App </p>
        <p className="max-w-[337px] text-[20px] my-4">
          Download our mobile app from your app store and get reminders about
          your fixed plan for the day. use anywhere, anytime.
        </p>
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
export default MobileAdvert;

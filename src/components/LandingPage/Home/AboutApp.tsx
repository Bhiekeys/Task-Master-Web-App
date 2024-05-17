import frame1 from "../../../assets/frame1.png"
import frame2 from "../../../assets/frame2.png"
import frame3 from "../../../assets/frame3.png"

const AboutApp = () => {
  return (
    <div className="flex mb-[57px] flex-col md:flex-row items-center justify-between mt-[78px] px-5 lg:px-0">
      <div className="lg:ml-[77px] text-center md:text-left">
        <h2 className="md:text-3xl text-2xl font-bold leading-10 md:leading-[45px] md:max-w-[396px]">
          An app that allows you to stay{' '}
          <span className="text-customGreen"> organize</span> and
          <span className="text-customGreen"> plan</span> ahead.
        </h2>
        <p className="text-sm md:text-base md:max-w-[290px] mt-3">
          Who needs a diary when you can get TaskMaster,and set up your daily
          activities.
        </p>
      </div>
      <div className="flex lg:mr-[44px] mt-10 md:mt-0">
        <div>
          <img src={frame1} alt="descriptionImage" />
          <img src={frame2} alt="descriptionImage" className="mt-3" />
        </div>
        <div>
          <img src={frame3} alt="descriptionImage" />
        </div>
      </div>
    </div>
  );
};
export default AboutApp;

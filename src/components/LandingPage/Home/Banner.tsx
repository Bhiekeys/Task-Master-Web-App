const Banner = () => {
  return (
    <div className="pt-[120px]  flex justify-center items-center text-center">
      <div className="max-w-[738px] px-5 md:px-0 ">
        <h2 className="text-2xl md:text-[40px] font-semibold leading-7 md:leading-[53px]">
          Stay <span className="text-customGreen">Organized</span> and get your
          <span className="text-customGreen"> day-to-day </span>
          activities sorted out in a more orderly manner.
        </h2>
        <p className="text-xs md:text-sm my-9">
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
  );
};
export default Banner;

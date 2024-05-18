import laptop from '../../../assets/laptop.png';

const TaskMaster = () => {
  return (
    <div className="bg-customGreen py-14 md:py-5 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-[150px] px-5 md:px-0">
      <div className=' text-center md:text-left '>
        <h2 className="font-bold text-2xl md:text-[32px] text-white">About TaskMaster</h2>
        <p className="max-w-[272px] text-white text-sm md:text-base leading-6 mt-2 ">
          TaskMaster is an app that allows users to efficiently stay organized
          and be well planned. TaskMaster allows you to never forget that
          appointment, and stay in check.....
        </p>
        <button
          type="button"
          className="bg-customGreen300 text-white py-3 px-8 md:px-[42px] text-sm md:text-xl font-medium rounded-[10px] mt-[18px]">
          View more
        </button>
      </div>
      <img src={laptop} alt="laptop" />
    </div>
  );
};
export default TaskMaster;

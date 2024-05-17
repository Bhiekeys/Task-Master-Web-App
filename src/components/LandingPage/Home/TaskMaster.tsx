import laptop from "../../../assets/laptop.png"

const TaskMaster = () => {
  return (
    <div className="bg-customGreen py-5 flex items-center justify-center gap-[150px]">
      <div>
        {' '}
        <h2 className="font-bold text-[32px] text-white">About TaskMaster</h2>
        <p className="max-w-[272px] text-white text-base">
          TaskMaster is an app that allows users to efficiently stay organized
          and be well planned. TaskMaster allows you to never forget that
          appointment, and stay in check.....
        </p>
        <button type="button" className="bg-customGreen300 text-white py-3 px-[42px] text-xl font-medium rounded-[10px] mt-[18px]">View more</button>
          </div>
          <img src={laptop} alt="laptop" />
    </div>
  );
}
export default TaskMaster
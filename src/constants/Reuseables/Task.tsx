import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import { LuCalendarDays } from 'react-icons/lu';
import { HiDotsHorizontal } from 'react-icons/hi';
import { PiFlagLight } from 'react-icons/pi';

interface TaskProps {
  id: number;
  title: string;
  time: string;
  date: string;
  important: boolean;
  status: string;
  toggleDropdown: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({
  id,
  title,
  time,
  date,
  important,
  status,
  toggleDropdown,
}) => {
  return (
    <div
      key={id}
      className="flex justify-between items-center bg-customGray200 px-2 sm:px-4 mb-[6px] rounded-md py-2 relative">
      <div className="flex items-center gap-[10px]">
        <div
          className={`w-[19px] h-[19px] rounded-[5px] ${
            status === 'inProgress'
              ? 'half-painted border border-black'
              : status === 'completed'
              ? 'bg-customGreen100 border border-black'
              : 'border border-black '
          }`}></div>
        <div>
          <p className="text-xs sm:text-sm font-semibold text-customGreen w-40 truncate sm:w-72">
            {title}
          </p>
          <div className="sm:flex items-center gap-3">
            <div className="flex items-center gap-1">
              <MdAccessTime className="text-xs" />
              <span className="text-[10px]">{time}</span>
            </div>
            <RxDotFilled className="text-xs hidden sm:block" />
            <div className="flex items-center gap-1">
              <LuCalendarDays className="text-xs" />
              <span className="text-[10px]">{date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-3">
        <HiDotsHorizontal
          className="cursor-pointer"
          onClick={() => toggleDropdown(id)}
        />
        <PiFlagLight
          className={`${important ? 'text-customRed' : 'text-black'}`}
        />
       
      </div>
    </div>
  );
};

export default Task;

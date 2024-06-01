/* eslint-disable @typescript-eslint/no-explicit-any */
import { HiDotsHorizontal } from 'react-icons/hi';
import { LuCalendarDays } from 'react-icons/lu';
import { MdAccessTime } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import { PiFlagLight } from 'react-icons/pi';
import { useEffect, useRef } from 'react';

interface Todo {
  id: number;
  title: string;
  time: string;
  date: string;
  important: boolean;
  status: string;
}

interface TaskItemProps {
  task: Todo;
  isSelected: boolean;
  onSelect: (id: number) => void;
  onDeselect: () => void;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskItems: React.FC<TaskItemProps> = ({
  task,
  isSelected,
  onSelect,
  onDeselect,
  onView,
  onEdit,
  onDelete,
}) => {
  const { id, title, time, date, important, status } = task;
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onDeselect();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);

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
          onClick={() => (isSelected ? onDeselect() : onSelect(id))}
        />
        <PiFlagLight
          className={`${important ? 'text-customRed' : 'text-black'}`}
        />
        {isSelected && (
          <div
            ref={modalRef}
            className="absolute z-10 right-14 cursor-pointer text-[10px] text-customGreen mt-44 p-2 rounded-br-[10px] rounded-tl-[10px] shadow-lg bg-white">
            <p onClick={onView}>view task</p>
            <p onClick={onEdit}>edit task</p>
            <p>move to in progress</p>
            <p>move to completed</p>
            <p onClick={onDelete}>delete task</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItems;

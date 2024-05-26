import { HiDotsHorizontal } from 'react-icons/hi';
import { LuCalendarDays } from 'react-icons/lu';
import { MdAccessTime } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import { PiFlagLight } from 'react-icons/pi';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Todo {
  id: number;
  title: string;
  time: string;
  date: string;
  important: boolean;
  status: string;
}

interface TodoTableProps {
  todo: Todo[];
  searchQuery?: string;
}

const TodoTable: React.FC<TodoTableProps> = ({ todo, searchQuery }) => {
  const filteredTodos = searchQuery
    ? todo.filter((t: Todo) =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : todo;

  return (
    <div className="mt-6  overflow-scroll scrollbar-hide h-96">
      {!todo.length ? (
        <div className="flex justify-center h-full items-center text-3xl text-lightBlack200">
          Add new task
        </div>
      ) : !filteredTodos.length ? (
        <div className="flex justify-center h-full items-center text-3xl text-lightBlack200">
          No search found
        </div>
      ) : (
        <>
          {filteredTodos.map((t: Todo) => {
            const { id, title, time, date, important, status } = t;
            return (
              <div
                key={id}
                className="flex justify-between items-center bg-customGray200 px-2 sm:px-4 mb-[6px] rounded-md py-2">
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
                  <HiDotsHorizontal className="cursor-pointer" />
                  <PiFlagLight
                    className={`${important ? 'text-customRed' : 'text-black'}`}
                  />
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default TodoTable;

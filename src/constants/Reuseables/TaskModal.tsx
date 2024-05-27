/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoFile } from 'react-icons/go';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';
import { PiFlagLight } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useRef, useState } from 'react';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TaskData) => void;
  mode: 'add' | 'edit' | 'view';
  title?: string;
  initialDate?: Date | null;
  initialTime?: string;
  initialCategory?: string;
  initialTitle?: string;
  initialDescription?: string;
  categoryOptions: Array<{ value: string; label: string }>;
  buttonText?: string;
}

interface TaskData {
  category: string;
  title: string;
  description: string;
  date: Date | null;
  time: string;
}

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  mode,
  title = mode === 'add' ? 'Add a New Task' : 'Edit Task',
  initialDate = null,
  initialTime = '',
  initialCategory = '',
  initialTitle = '',
  initialDescription = '',
  categoryOptions,
  buttonText = mode === 'add' ? 'Add' : 'Edit',
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);
  const [selectedTime, setSelectedTime] = useState<string>(initialTime);
  const [category, setCategory] = useState<string>(
    initialCategory || categoryOptions[0].value
  );

  const [taskTitle, setTaskTitle] = useState<string>(initialTitle);
  const [description, setDescription] = useState<string>(initialDescription);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };
  const handleOverlayClick = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);
  const isReadOnly = mode === 'view';
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({
      category,
      title: taskTitle,
      description,
      date: selectedDate,
      time: selectedTime,
    });
    onClose();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed z-30 inset-0 flex justify-center items-center bg-[#D9D9D94D] opacity-100 transition-opacity">
      <div
        ref={modalRef}
        className="bg-white py-6 rounded-[20px] px-5 sm:px-0 mx-5 sm:mx-0 max-h-[450px]  max-w-[517px] w-full sm:pl-[68px] sm:max-h-[564px] sm:pr-3 overflow-y-scroll">
        <div className="flex justify-between items-center mb-[22px]">
          <p className="font-semibold text-xl">{title}</p>
          <MdOutlineCancel
            onClick={onClose}
            className="cursor-pointer text-[18px]"
          />
        </div>
        <form className="sm:mr-16" onSubmit={handleSubmit}>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            disabled={isReadOnly}
            className="outline-none text-[8px] mb-[18px] border border-lightBlack200 rounded-md p-1">
            <option value="work">Work</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
          </select>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-[8px]">
              Title
            </label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              disabled={isReadOnly}
              placeholder="Get my car fixed at the mechanic"
              className="outline-none border-b-2 mt-1 border-lightBlack200 placeholder:text-[8px] text-[8px] font-semibold"
            />
          </div>
          <div className="mb-14">
            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isReadOnly}
              className="outline-none border mt-5 p-2 rounded-[10px] w-full placeholder:text-[8px] text-[8px]"></textarea>
          </div>
          <div className="border-b border-lightBlack300 my-5 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              <SlCalender />
              <p className="text-xs font-medium text-lightBlack100">
                Due Date{' '}
              </p>
            </div>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              disabled={isReadOnly}
              className="text-xs font-medium w-20 outline-none cursor-pointer"
              placeholderText="Select Date"
            />
          </div>
          <div className="border-b border-lightBlack300 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              <IoNotificationsOutline />
              <p className="text-xs font-medium text-lightBlack100">
                Reminder at
              </p>
            </div>
            <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
              disabled={isReadOnly}
              className="text-xs font-medium outline-none cursor-pointer "
            />
          </div>
          <div className="border-b border-lightBlack300 my-5 pb-2  flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PiFlagLight />
              <p className="text-xs font-medium text-lightBlack100">
                Priority{' '}
              </p>
            </div>
            <PiFlagLight className="text-customGreen" />
          </div>
          <div className="border-b border-lightBlack300 pb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GoFile />
              <p className="text-xs font-medium text-lightBlack100">
                Attachment{' '}
              </p>
            </div>
            <span className="text-xs font-medium">Add</span>
          </div>
          <>
            {mode !== 'view' && (
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="max-w-[139px] py-2 bg-customGreen w-full text-white rounded-[10px]">
                  {buttonText}
                </button>
              </div>
            )}
          </>
        </form>
      </div>
    </div>
  );
};
export default TaskModal;

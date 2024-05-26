/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoFile } from 'react-icons/go';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineCancel } from 'react-icons/md';
import { PiFlagLight } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useRef, useState } from 'react';

const TaskModal = ({ openModal }: any) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };
  const handleOverlayClick = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      openModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);
  return (
    <div className="fixed z-10 inset-0 flex justify-center items-center bg-[#D9D9D94D] opacity-100 transition-opacity">
      <div
        ref={modalRef}
        className="bg-white py-6 rounded-[20px] px-5 sm:px-0 mx-5 sm:mx-0 max-h-[400px]  max-w-[517px] w-full sm:pl-[68px] sm:max-h-[564px] sm:pr-3 overflow-y-scroll">
        <div className="flex justify-between items-center mb-[22px]">
          <p className="font-semibold text-xl">Add a New Task</p>
          <MdOutlineCancel
            onClick={() => openModal(false)}
            className="cursor-pointer text-[18px]"
          />
        </div>
        <form className="sm:mr-16">
          <select
            id="cars"
            name="cars"
            className="outline-none text-[8px] mb-[18px] border border-lightBlack200 rounded-md p-1">
            <option value="volvo">Work</option>
            <option value="saab">Family</option>
            <option value="mercedes">Friends</option>
          </select>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-[8px]">
              Title
            </label>
            <input
              type="text"
              placeholder="Get my car fixed at the mechanic"
              className="outline-none border-b-2 mt-1 border-lightBlack200 placeholder:text-[8px] text-[8px] font-semibold"
            />
          </div>
          <div className="mb-14">
            <textarea
              name="description"
              placeholder="Description"
              id=""
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
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="max-w-[139px] py-2 bg-customGreen w-full text-white rounded-[10px]  ">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TaskModal;

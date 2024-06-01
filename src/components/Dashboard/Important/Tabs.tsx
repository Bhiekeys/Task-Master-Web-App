/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoMdSearch } from 'react-icons/io';

import { useState, ReactNode } from 'react';
interface Tab {
  title: string;
  content: ReactNode;
  count: number;
}

interface TabsProps {
  tabs: Tab[];
  onSearchChange: (searchTerm: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onSearchChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchQuery(searchTerm);
    onSearchChange(searchTerm);
  };

  return (
    <>
      <div className="w-full">
        <div className=" flex flex-col">
          <div className="flex justify-between px-2 items-center border max-w-[578px] w-full rounded-md py-1 ">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="max-w-[548px] w-full bg-transparent outline-none placeholder:text-sm"
            />
            <IoMdSearch className="ml-2 cursor-pointer text-xl" />
          </div>
          <h2 className="font-semibold  text-xl mt-[15px] mb-1">New Tasks</h2>
          <div className="flex flex-col-reverse sm:flex-row justify-between w-full border-[#EDE0DE] border-b ">
            <div className="flex">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center tab-small-screen   ${
                    activeTab === index ? 'border-b-2  border-customGreen' : ''
                  }`}>
                  <div
                    className={`sm:mx-1 flex  gap-1 sm:gap-0 items-center  px-1 sm:px-0 pb-1 sm:pb-0`}>
                    <button
                      key={index}
                      className={`sm:px-1 sm:py-1 font-semibold text-xs sm:text-[15px]  ${
                        index > 0 ? 'ml-2' : ''
                      } ${
                        activeTab === index ? 'text-customGreen' : 'text-black'
                      } focus:outline-none`}>
                      {tab.title}
                    </button>
                    <span
                      className={` w-[18px] h-[18px] text-white text-center p-[2px] sm:p-1 flex items-center justify-center bg-customGreen text-[8px] sm:text-xs rounded-[100px] focus:outline-none`}>
                      {tab.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">{tabs[activeTab].content}</div>
        </div>
      </div>
    </>
  );
};

export default Tabs;

import Tabs from './Tabs';
import { useState } from 'react';
import TodoTable from './TodoTable';
import { MdAdd } from 'react-icons/md';

const ActiveState = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const todo = [
    {
      id: 1,
      title: 'Meeting with Tee Tenor',
      time: '10:30am',
      date: 'Monday, 13th June, 2024',
      important: true,
      status: 'todo',
    },
    {
      id: 2,
      title: 'Open Udemy and learn a new skill',
      time: '10:30am',
      date: 'Monday, 13th June, 2024',
      important: true,
      status: 'todo',
    },
    {
      id: 3,
      title: 'Open Udemy and learn a new skill',
      time: '10:30am',
      date: 'Monday, 13th June, 2024',
      important: false,
      status: 'inProgress',
    },
    {
      id: 4,
      title: 'Open Udemy and learn a new skill',
      time: '10:30am',
      date: 'Monday, 13th June, 2024',
      important: false,
      status: 'completed',
    },
    {
      id: 5,
      title: 'Open Udemy and learn a new skill',
      time: '10:30am',
      date: 'Monday, 13th June, 2024',
      important: true,
      status: 'inProgress',
    },
    {
      id: 6,
      title: 'Open Udemy and learn a new skill',
      time: '10:30am',
      date: 'Monday, 13th June, 2024',
      important: false,
      status: 'completed',
    },
    {
      id: 7,
      title: 'Open Udemy and learn a new skill',
      time: '10:30am',
      date: 'Monday, 13th June, 2024',
      important: true,
      status: 'todo',
    },
    {
      id: 8,
      title: 'Open Udemy and learn a new skill',
      time: '10:30am',
      date: 'Monday, 13th June, 2024',
      important: true,
      status: 'todo',
    },
   
    
   
  ];

  const todos = todo.filter((t) => t.status === 'todo');
  const inProgress = todo.filter((t) => t.status === 'inProgress');
  const completed = todo.filter((t) => t.status === 'completed');
  const handleSearchChange = (searchTerm: string) => {
    setSearchQuery(searchTerm);
  };

  const tabs = [
    {
      title: 'To do',
      content: (
        <>
          <TodoTable todo={todos} searchQuery={searchQuery} />
        </>
      ),
      count: todos.length,
    },
    {
      title: 'In Progress',
      content: (
        <>
          <TodoTable todo={inProgress} searchQuery={searchQuery} />
        </>
      ),
      count: inProgress.length,
    },
    {
      title: 'Completed',
      content: (
        <>
          <TodoTable todo={completed} searchQuery={searchQuery} />
        </>
      ),
      count: completed.length,
    },
  ];

  return (
    <>
      <div className=" mt-4 text-xl text-black border-transparent overflow-x-auto sm:overflow-hidden">
        <Tabs tabs={tabs} onSearchChange={handleSearchChange} />
        <div className="flex justify-end">
          <button
            type="button"
            className="p-2 rounded-full cursor-pointer bg-customGreen w-fit">
            <MdAdd className=" text-white text-2xl  " />
          </button>
        </div>
      </div>
    </>
  );
};

export default ActiveState;

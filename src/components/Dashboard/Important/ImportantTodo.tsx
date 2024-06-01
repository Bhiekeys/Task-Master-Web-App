/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from 'react';
import TaskModal from '../../../constants/Reuseables/TaskModal';
import Modal from '../../../constants/Reuseables/Modal';
import TaskItems from '../../../constants/Reuseables/TaskItems';

interface Todo {
  id: number;
  title: string;
  time: string;
  date: string;
  important: boolean;
  status: string;
}

interface TaskListProps {
  tasks: Todo[];
  searchQuery?: string;
}

const ImportantTodo: React.FC<TaskListProps> = ({ tasks, searchQuery }) => {
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [viewTask, setViewTask] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<boolean>(false);
  const [deleteTask, setDeleteTask] = useState<boolean>(false);

  const handleViewTask = () => {
    setViewTask(true);
  };
  const closeTaskHandler = () => {
    setViewTask(false);
  };
  const handleEditTask = () => {
    setEditTask(true);
  };
  const closeEditTaskHandler = () => {
    setEditTask(false);
  };
  const handleDeleteTask = () => {
    setDeleteTask(true);
  };
  const closeDeleteTaskHandler = () => {
    setDeleteTask(false);
  };

  const handleDelete = () => {};
  const handleEditSubmit = (data: any) => {
    console.log('Edit task data:', data);
    // Handle edit task submission logic here
  };
  // const toggleDropdown = (id: number) => {
  //   setSelectedTaskId((prevId) => (prevId === id ? null : id));
  // };

  const filteredTasks = searchQuery
    ? tasks.filter((t: Todo) =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : tasks;

  const handleOverlayClick = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setSelectedTaskId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);

  return (
    <div className="mt-6  overflow-scroll scrollbar-hide h-96">
      {!filteredTasks?.length ? (
        <div className="flex justify-center h-full items-center text-3xl text-lightBlack200">
          {searchQuery ? ' No search found' : ' Add new task'}
        </div>
      ) : (
        filteredTasks.map((task) => (
          <TaskItems
            key={task.id}
            task={task}
            isSelected={selectedTaskId === task.id}
            onSelect={setSelectedTaskId}
            onDeselect={() => setSelectedTaskId(null)}
            onView={handleViewTask}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        ))
      )}
      {viewTask && (
        <TaskModal
          isOpen={viewTask}
          onClose={closeTaskHandler}
          onSubmit={handleEditSubmit}
          mode="view"
          title="Task Details"
          initialDate={new Date()}
          initialTime="12:00"
          initialCategory="work"
          initialTitle="Existing Task"
          initialDescription="This is an existing task description."
          categoryOptions={[
            { value: 'work', label: 'Work' },
            { value: 'family', label: 'Family' },
            { value: 'friends', label: 'Friends' },
          ]}
          buttonText="Save"
        />
      )}
      {editTask && (
        <TaskModal
          isOpen={editTask}
          onClose={closeEditTaskHandler}
          onSubmit={handleEditSubmit}
          mode="edit"
          title="Edit Task"
          initialDate={new Date()}
          initialTime="12:00"
          initialCategory="work"
          initialTitle="Existing Task"
          initialDescription="This is an existing task description."
          categoryOptions={[
            { value: 'work', label: 'Work' },
            { value: 'family', label: 'Family' },
            { value: 'friends', label: 'Friends' },
          ]}
          buttonText="Save"
        />
      )}
      {deleteTask && (
        <Modal
          isOpen={deleteTask}
          onClose={closeDeleteTaskHandler}
          onConfirm={handleDelete}
          title="Are you sure you want to delete?"
          cancelButtonText="No"
          confirmButtonText="Delete"
        />
      )}
    </div>
  );
};

export default ImportantTodo;

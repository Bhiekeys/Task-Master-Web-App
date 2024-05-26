import { Outlet } from 'react-router';
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Dashboard/Header';

const DashboardLayout = () => {
  return (
    <div className='flex'>
      <div className="hidden md:block ">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-x-hidden md:ml-16 lg:ml-80">
        <div className='md:hidden'>
          <Header/>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

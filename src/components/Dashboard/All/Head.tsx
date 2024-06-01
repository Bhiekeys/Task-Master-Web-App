import ActiveState from './ActiveState';
import Header from './Header';

const Head = () => {
  return (
    <div className="h-screen overflow-y-scroll px-4 md:px-0  md:pl-7 md:pr-5 scrollbar-hidden pt-[70px] md:pt-0 ">
      <Header />
      <ActiveState />
    </div>
  );
};
export default Head;

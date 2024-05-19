import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineDateRange } from 'react-icons/md';
import { PiFlagLight, PiFoldersLight } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useScrolling from '../../../animation/useScroll';

const Purpose = () => {
  const sectionRef = useRef(null);
  const isVisible = useScrolling(sectionRef);
  return (
    <div className="py-10 flex px-5 md:px-0 flex-col overflow-hidden items-center justify-center bg-customGreen">
      <>
        <div>
          <p className="max-w-[855px]  font-semibold text-xl leading-10 md:leading-[36px] md:text-2xl text-center">
            A <span className="text-customPink"> webapp</span> created specially
            for business men/women, students and people who wants to stay{' '}
            <span className="text-customPink"> organized</span> and plan their
            daily activities orderly.
          </p>
        </div>
        <div className=" gap-3 flex flex-wrap justify-center mt-[22px] ">
          {cards.map((card) => {
            const { id, icon, title, text } = card;
            return (
              <motion.div
                ref={sectionRef}
                initial={{ opacity: 1, rotateX: 10 }}
                animate={{
                  opacity: isVisible ? 1 : 1,
                  rotateX: isVisible ? 0 : 10,
                }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                key={id}
                className="flex  items-center bg-white  md:mx-0 h-[236px] px-5 max-w-[527px] rounded-[10px] gap-3 lg:px-20">
                <span className="bg-customGreen text-white p-2 rounded-full text-xl mb-10">
                  {' '}
                  {icon}
                </span>
                <motion.div
                  ref={sectionRef}
                  initial={{ opacity: 1, rotateX: 10 }}
                  animate={{
                    opacity: isVisible ? 0.2 : 1,
                    rotateX: isVisible ? 0 : 10,
                  }}
                  transition={{ duration: 0.5, delay: id * 0.1 }}
                  className="">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm  mt-2 max-w-[271px]">{text}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </>
    </div>
  );
};
export default Purpose;

const cards = [
  {
    id: 1,
    icon: <IoNotificationsOutline />,
    title: 'Get reminders',
    text: 'Get reminders before the due day of your planned event.',
  },
  {
    id: 2,
    icon: <PiFoldersLight />,
    title: 'Categorize your plans',
    text: 'Stay organized by categorizing your planned events.',
  },
  {
    id: 3,
    icon: <MdOutlineDateRange />,
    title: 'Plan Real Life',
    text: 'Uses real dates and times to plan and stay organized.',
  },
  {
    id: 4,
    icon: <PiFlagLight />,
    title: 'Set Priority',
    text: 'Organize your events according to its importance.',
  },
];

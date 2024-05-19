import user1 from '../../../assets/user1.png';
import user2 from '../../../assets/user2.png';
import user3 from '../../../assets/user3.png';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useScrolling from '../../../animation/useScroll';

const Reviews = () => {
  const sectionRef = useRef(null);
  const isVisible = useScrolling(sectionRef);
  return (
    <div className="flex justify-center flex-col items-center pb-10 md:pb-[123px] px-5 md:px-0">
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold py-7 md:py-[57px] text-center md:text-center">
          What are our <span className="text-customGreen"> App Users</span> are
          saying
        </h2>
      </div>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 1, rotateX: 10 }}
        animate={{
          opacity: isVisible ? 1 : 1,
          rotateX: isVisible ? 0 : 10,
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center flex-wrap gap-9 ">
        {users.map((user, index) => {
          const { id, image, name, text } = user;
          const bg = index === 1 ? 'bg-customGreen200' : 'bg-customGray';
          return (
            <motion.div
              ref={sectionRef}
              initial={{ opacity: 1, rotateX: 10 }}
              animate={{
                opacity: isVisible ? 1 : 0.2,
                rotateX: isVisible ? 0 : 10,
              }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              key={id}
              className={`${bg} flex flex-col justify-center items-center rounded-[10px] text-customGreen  max-w-[299px] px-8 h-[275px]`}>
              <img src={image} alt="user" />
              <div className="mt-[29px]">
                <p className="text-2xl font-semibold">{name}</p>
                <p className="text-sm">{text}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Reviews;

const users = [
  {
    id: 1,
    image: user1,
    name: 'Damilola Amoo',
    text: 'Been using this app for more than 6 months now, and its simply the best.',
  },
  {
    id: 2,
    image: user2,
    name: 'Samuel Abuchi',
    text: 'I do forget things a lot, but with taskmaster i always remember whatever i have to do.',
  },
  {
    id: 3,
    image: user3,
    name: 'Yusuf Wzarbi',
    text: 'Taskmaster is east to use, no complexity just sign up and start adding your activities.',
  },
];

import { motion } from 'framer-motion';
import dashboard from '../../../assets/dashboardImage.png';
import Footer from '../Footer';
import AboutApp from './AboutApp';
import MobileAdvert from './MobileAdvert';
import Purpose from './Purpose';
import Reviews from './Reviews';
import TaskMaster from './TaskMaster';
import useScrolling from '../../../animation/useScroll';
import { useRef } from 'react';

const Banner = () => {
  const sectionRef = useRef(null);
  const isVisible = useScrolling(sectionRef);

  return (
    <>
      <motion.div
        id="home"
        className="md:pt-[120px] overflow-hidden pt-24  flex justify-center items-center text-center">
        <motion.div className="max-w-[738px] px-5 md:px-0 ">
          <motion.h1
            ref={sectionRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-2xl md:text-[40px] font-bold md:font-semibold leading-10 md:leading-[53px]">
            Stay <span className="text-customGreen">Organized</span> and get
            your
            <span className="text-customGreen"> day-to-day </span>
            activities sorted out in a more orderly manner.
          </motion.h1>
          <motion.p
            ref={sectionRef}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 200 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-sm my-5 md:my-9">
            Be part of the most organized and efficient people on earth by using
            the TaskMaster
          </motion.p>
          <div className="space-x-5 sm:space-x-10">
            <button
              type="button"
              className="bg-customGreen text-white font-medium py-3 md:py-4 md:px-[18px] px-2 rounded-[20px] text-xs">
              Create Account
            </button>
            <button
              type="button"
              className="border border-customGreen100 font-medium text-customGreen py-3 md:py-4 px-2 rounded-[20px] text-xs">
              Download Our App
            </button>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex justify-center mt-9 px-5 lg:px-0">
        <motion.img
          ref={sectionRef}
          initial={{ opacity: 0, rotateX: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, rotateX: isVisible ? 0 : 20 }}
          transition={{ duration: 2, delay: 0.3 }}
          src={dashboard}
          alt="dashboardImage"
        />
      </div>
      <AboutApp />
      <Purpose />
      <MobileAdvert />
      <Reviews />
      <TaskMaster />
      <Footer />
    </>
  );
};
export default Banner;

import { useRef } from 'react';
import frame1 from '../../../assets/frame1.png';
import frame2 from '../../../assets/frame2.png';
import frame3 from '../../../assets/frame3.png';
import { motion } from 'framer-motion';
import useScrolling from '../../../animation/useScroll';

const AboutApp = () => {
 const sectionRef = useRef(null);
 const isVisible = useScrolling(sectionRef);
  return (
    <div
      id="about"
      className="flex overflow-hidden mb-[57px] flex-col md:flex-row items-center justify-between mt-[78px] px-5 lg:px-0">
      <div className="lg:ml-[77px] text-center md:text-left">
        <motion.h2
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:text-3xl text-2xl font-bold leading-10 md:leading-[45px] md:max-w-[396px]">
          An app that allows you to stay{' '}
          <span className="text-customGreen"> organize</span> and
          <span className="text-customGreen"> plan</span> ahead.
        </motion.h2>
        <motion.p
          ref={sectionRef}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 200 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-sm md:text-base md:max-w-[290px] mt-3">
          Who needs a diary when you can get TaskMaster,and set up your daily
          activities.
        </motion.p>
      </div>
      <div className="flex lg:mr-[44px] mt-10 md:mt-0">
        <div>
          <motion.img
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            src={frame1}
            alt="descriptionImage"
          />
          <motion.img
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            src={frame2}
            alt="descriptionImage"
            className="mt-3"
          />
        </div>
        <div>
          <motion.img
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            src={frame3}
            alt="descriptionImage"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutApp;

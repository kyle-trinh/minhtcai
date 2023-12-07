import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { courses, experiences } from '../constants';
import { SectionWrapper } from './hoc';
import { fadeIn, textVariant } from './utils/motion';

const CourseCard = ({ title, classID, index }) => {
  return (
    <motion.div
      className='flex bg-tertiary rounded-md items-center'
      variants={fadeIn('up', 'spring', Math.floor(index / 2) * 0.3, 0.5)}
    >
      <div className='bg-white-100 text-tertiary rounded-md px-3 py-3 h-full flex items-center'>
        <p>{classID}</p>
      </div>
      <div className='px-6 py-2'>
        <p>{title}</p>
      </div>
    </motion.div>
  );
};

function Courses() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What course I took
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Related Courseworks.
        </h2>
      </motion.div>

      <div className='mt-20 grid grid-cols-2 gap-x-12 gap-y-8'>
        {courses.map((course, index) => (
          <CourseCard key={`experience-${index}`} {...course} index={index} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Courses, 'courseworks');

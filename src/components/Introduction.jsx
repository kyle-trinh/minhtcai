import { SectionWrapper } from './hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from './utils/motion';
import { styles } from '../styles';
import { researchInterests } from '../constants';

const ServiceCard = ({ index, title, image, description }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={` lg:w-auto rounded-[20px] bg-tertiary flex lg:h-72 h-auto  flex-col flex-1 lg:flex-auto ${
      index % 2 === 1
        ? 'lg:flex-row-reverse lg:ml-16 ml-0'
        : 'lg:flex-row  lg:mr-16 mr-0'
    }`}
  >
    <img
      src={image}
      alt='web-development'
      className='lg:w-80 lg:max-w-none object-cover rounded-[20px] w-auto h-80 md:max-h-52 lg:h-auto lg:max-h-none'
    />
    <div
      options={
        {
          // max: 45,
          // scale: 1,
          // speed: 450,
        }
      }
      className='lg:py-5 lg:px-12 px-6 py-6 flex justify-center items-start flex-col text-left'
    >
      <h3 className='text-white sm:text-5xl text-3xl font-bold md:mb-6 mb-2'>
        {title}
      </h3>
      <p className='font-light'>{description}</p>
    </div>
  </motion.div>
);

const IntroductionSection = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Research Interest.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Currently, my focus is on 3D Vision applications, specifically
        researching the integration of vision and language to generate CAD
        models with industrial accuracy. My goal this year is to develop a
        versatile framework capable of producing CAD models for furniture
        components from image and/or language inputs, accommodating
        out-of-distribution requests like unconventional chair designs.
      </motion.p>

      <div className='mt-20 flex lg:flex-col md:flex-row flex-col gap-12 w-full'>
        {researchInterests.map((interest, index) => (
          <ServiceCard key={interest.id} index={index} {...interest} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(IntroductionSection, 'research-interest');

import { SectionWrapper } from './hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from './utils/motion';
import { styles } from '../styles';
import { researchInterests } from '../constants';

const ServiceCard = ({ index, title, image, description }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={` rounded-[20px] bg-tertiary flex h-72  ${
      index % 2 === 1 ? 'flex-row-reverse ml-16' : 'mr-16'
    }`}
  >
    <img
      src={image}
      alt='web-development'
      className='w-80 max-w-none object-cover rounded-[20px]'
    />
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='py-5 px-12 flex justify-center items-start flex-col text-left'
    >
      <h3 className='text-white text-5xl font-bold mb-6'>{title}</h3>
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

      <div className='mt-20 flex flex-col gap-12'>
        {researchInterests.map((interest, index) => (
          <ServiceCard key={interest.id} index={index} {...interest} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(IntroductionSection, 'research-interest');

/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from './hoc';
import { fadeIn, textVariant } from './utils/motion';
import { projects } from '../constants';
import DialogDemo from './ui/diaglog';
import { useState } from 'react';

const ProjectCard = ({
  index,
  name,
  description,
  image,
  setIsModalOpen,
  setIdx,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', Math.floor(index / 3) * 0.5, 0.5)}
      whileHover={{
        translateY: '-16px',
      }}
      onClick={() => {
        setIdx(index);
        setIsModalOpen(true);
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={`${name} project thumbnail`}
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idx, setIdx] = useState(null);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>
          Research Experience and Selected Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and reports. It reflects my ability to
          solve complex problems and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            name={project.name}
            description={`${project.description
              .split(' ')
              .slice(0, 30)
              .join(' ')}...`}
            image={project.image}
            setIsModalOpen={setIsModalOpen}
            setIdx={setIdx}
          />
        ))}
      </div>
      <DialogDemo
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        project={idx !== null ? projects[idx] : null}
      />
    </>
  );
};

export default SectionWrapper(Projects, 'projects');

import { Suspense } from 'react';
import StarsCanvas from './components/canvas/StarsCanvas';
import { navLinks } from './constants';
import EarthCanvas from './components/canvas/EarthCanvas';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <Suspense fallback={null}>
      <StarsCanvas />
      <nav>
        <ul className='flex justify-center gap-12 uppercase py-6 text-2xl'>
          {navLinks.map(({ title, id }) => (
            <li key={id} className='hover:text-secondary'>
              <a href={`/#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='h-screen text-white'>
        <div className='flex justify-center h-full w-full container mx-auto items-center overflow-hidden flex-col xl:flex-row'>
          <div className='xl:flex-1 xl:h-[850px] md:h-[550px] h-[350px]'>
            <EarthCanvas />
          </div>
          <div className='flex-1 ml-10 text-center xl:text-left'>
            <h1 className='text-7xl mb-6'>MINH TRAN</h1>
            <div className='flex flex-col gap-6 font-light text-lg'>
              <p>
                I am a graduate student of the Master of Science in Computer
                Vision at Carnegie Mellon University, where I work on computer
                vision and machine learning.
              </p>
              <p>
                Prior to CMU, I've worked at Actuate AI as a Data Scientist for
                more than 3 years. Prior to Actuate, I've earned my degree in
                Data Science from DePaul University, where I was advised by
                Prof.Jacob Furst, and in E-commerce from Foreign Trade
                University of Hanoi, advised by Prof.Hung Nguyen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Introduction />
      <Projects />
      <Experience />
      <div className='h-screen text-white'>Section 1</div>
    </Suspense>
  );
}

export default App;

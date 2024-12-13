import { Suspense, useState } from 'react';
import StarsCanvas from './components/canvas/StarsCanvas';
import EarthCanvas from './components/canvas/EarthCanvas';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Navbar from './components/Navbar';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HelmetProvider>
      <Suspense fallback={null}>
        <StarsCanvas />
        <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <div onClick={() => setIsMenuOpen(false)}>
          <div className='min-h-[90vh] text-white container mx-auto px-2 sm:px-0 flex items-center justify-center'>
            <div className='flex flex-col xl:flex-row overflow-hidden items-center'>
              <div className='xl:flex-1 xl:h-[950px] lg:h-[650px] sm:h-[550px] h-[400px] self-stretch'>
                <EarthCanvas />
              </div>
              <div className='flex-[0.75] xl:ml-10 text-center xl:text-left sm:w-2/3 w-full xl:w-full'>
                <h1 className='text-7xl mb-6 font-bold'>MINH TRAN</h1>
                <div className='flex flex-col gap-6 font-light text-lg'>
                  <p>
                    I am a graduate student of the Master of Science in Computer
                    Vision at Carnegie Mellon University, advised by{' '}
                    <span className=' text-primary bg-secondary px-2 py-0.5 hover:bg-white rounded'>
                      <a
                        href='https://www.cs.cmu.edu/~motoole2/'
                        target='blank'
                        rel='noreferrer noopener'
                      >
                        Prof. Matthew P. O'Toole
                      </a>
                    </span>
                    , where I work on imaging, camera and machine learning. For my capstone project at Meta Reality Lab
                    , I was advised by{' '}
                    <span className=' text-primary bg-secondary px-2 py-0.5 hover:bg-white rounded'>
                      <a
                        href='https://www.cs.cmu.edu/~dpathak/'
                        target='blank'
                        rel='noreferrer noopener'
                      >
                        Prof. Deepak Pathak
                      </a>
                    </span>
                    , He Wen and Yuan Dong, along with my partner Ashwin Vaswani.
                  </p>
                  <p>
                    Prior to CMU, I've worked at Actuate AI as a Data Scientist
                    for more than 3 years. Prior to Actuate, I've earned my
                    degree in Data Science from DePaul University, where I was
                    advised by{' '}
                    <span className=' text-primary bg-secondary px-2 py-0.5 hover:bg-white rounded'>
                      <a
                        href='https://www.cdm.depaul.edu/Faculty-and-Staff/pages/faculty-info.aspx?fid=365'
                        target='blank'
                        rel='noreferrer noopener'
                      >
                        Prof.Jacob Furst
                      </a>
                    </span>
                    , and in E-commerce from Foreign Trade University of Hanoi,
                    advised by Prof.Hung Nguyen.
                  </p>
                </div>
                <div className='flex mt-6 gap-5 flex-wrap justify-center xl:justify-start'>
                  <a
                    href='cv.pdf'
                    target='blank'
                    rel='noreferrer noopener'
                    className='bg-white text-primary rounded-lg px-3 py-2 hover:bg-secondary'
                  >
                    Resume
                  </a>
                  <a
                    href='https://github.com/minhtcai'
                    target='blank'
                    rel='noreferrer noopener'
                    className='text-white border-white border-2 rounded-lg px-3 py-2 hover:bg-secondary hover:text-primary'
                  >
                    Github
                  </a>
                  <a
                    href='https://scholar.google.com/citations?authuser=1&user=k4t5_hEAAAAJ'
                    target='blank'
                    rel='noreferrer noopener'
                    className='text-white border-white border-2 rounded-lg px-3 py-2 hover:bg-secondary hover:text-primary'
                  >
                    Google Scholar
                  </a>
                  <a
                    href='mailto:minh@viai.io'
                    className='text-white border-white border-2 rounded-lg px-3 py-2 hover:bg-secondary hover:text-primary'
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Introduction />
          <Projects />
          <Experience />
          <Courses />
        </div>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;

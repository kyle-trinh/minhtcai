import { navLinks } from '../constants';

function Navbar({ isOpen, setIsOpen }) {
  return (
    <>
      <button
        className='fixed top-6 left-6 z-50 md:hidden'
        onClick={() => setIsOpen((open) => !open)}
      >
        <div className='flex flex-col gap-1'>
          <div className={`w-8 h-1  ${isOpen ? 'bg-black' : 'bg-white'}`} />
          <div className={`w-8 h-1  ${isOpen ? 'bg-black' : 'bg-white'}`} />
          <div className={`w-8 h-1  ${isOpen ? 'bg-black' : 'bg-white'}`} />
        </div>
      </button>
      <nav
        className={`md:block md:relative md:bg-transparent md:h-auto md:w-full fixed h-screen w-10/12 bg-white z-40 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className='flex md:justify-center lg:gap-12 gap-6 uppercase py-6 text-2xl lg:text-2xl md:text-lg md:gap-8 md:flex-row flex-col md:mt-0 mt-24 md:text-white text-black md:pl-0 pl-8'>
          {navLinks.map(({ title, id }) => (
            <li
              key={id}
              className='hover:text-secondary'
              onClick={() => setIsOpen(false)}
            >
              <a href={`/#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

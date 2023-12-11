import * as Dialog from '@radix-ui/react-dialog';
import {
  GithubIcon,
  PieChartIcon,
  GlobeIcon,
  PresentationIcon,
} from 'lucide-react';
import TooltipDemo from './tooltip';

const DialogDemo = ({ isOpen, setIsModalOpen, project }) => {
  if (!project) {
    return null;
  }

  const { image, name, description, github, report, website, presentation } =
    project;

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0  bg-secondary opacity-60' />
        <Dialog.Content className=' bg-primary rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 max-h-[85vh] p-[25px] max-w-[600px]'>
          <div>
            <img src={image} alt={name} />
            <h3 className='text-5xl font-bold mb-6 mt-6'>{name}</h3>
            <p className='text-secondary'>{description}</p>
            <div className='flex mt-8 gap-5 mb-8'>
              {website && (
                <TooltipDemo text='Website'>
                  <a href={website} target='blank' rel='noreferrer noopener'>
                    <GlobeIcon />
                  </a>
                </TooltipDemo>
              )}
              {github && (
                <TooltipDemo text='Github'>
                  <a href={github} target='blank' rel='noreferrer noopener'>
                    <GithubIcon />
                  </a>
                </TooltipDemo>
              )}
              {report && (
                <TooltipDemo text='Report'>
                  <a href={report} target='blank' rel='noreferrer noopener'>
                    <PieChartIcon />
                  </a>
                </TooltipDemo>
              )}
              {presentation && (
                <TooltipDemo text='Archive'>
                  <a
                    href={presentation}
                    target='blank'
                    rel='noreferrer noopener'
                  >
                    <PresentationIcon />
                  </a>
                </TooltipDemo>
              )}
            </div>
          </div>

          <Dialog.Close asChild>
            <button
              className=' bg-secondary rounded-md px-3 py-2'
              aria-label='Close'
            >
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;

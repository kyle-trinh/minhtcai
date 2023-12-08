import * as Tooltip from '@radix-ui/react-tooltip';

const TooltipDemo = ({ children, text }) => {
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className=' bg-secondary text-primary rounded px-2 py-2'
            sideOffset={5}
          >
            {text}
            <Tooltip.Arrow className='fill-white' />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipDemo;

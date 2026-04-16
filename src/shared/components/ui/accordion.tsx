import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { ChevronDownIcon } from '@/shared/components/ui/chevron-down';
import { cn } from '@/shared/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
  className,
  ...props
}: AccordionPrimitive.Item.Props) => (
  <AccordionPrimitive.Item
    className={cn('border-b last:border-b-0', className)}
    {...props}
  />
);

const AccordionTrigger = ({
  children,
  className,
  ...props
}: AccordionPrimitive.Trigger.Props) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      className={cn(
        'flex w-full items-center justify-between py-4 text-left font-medium transition-all [&[data-panel-open]>div]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="shrink-0 transition-transform duration-200"
        size={16}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent = ({
  children,
  className,
  ...props
}: AccordionPrimitive.Panel.Props) => (
  <AccordionPrimitive.Panel
    className={cn(
      'grid overflow-hidden transition-all data-[ending-style]:grid-rows-[0fr] data-[panel-open]:grid-rows-[1fr] data-[starting-style]:grid-rows-[0fr]',
      className
    )}
    {...props}
  >
    <div className="min-h-0">{children}</div>
  </AccordionPrimitive.Panel>
);

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

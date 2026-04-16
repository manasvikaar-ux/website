'use client';

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Image from 'next/image';
import type { WorkshopMetadata } from '@/content/workshops';
import { workshops as upcomingWorkshops } from '@/content/workshops';
import { Button } from '@/shared/components/ui/button';
import { Card } from '@/shared/components/ui/card';
import { ClockIcon } from '@/shared/components/ui/clock';
import { MapPinIcon } from '@/shared/components/ui/map-pin';
import { Separator } from '@/shared/components/ui/separator';

const columnHelper = createColumnHelper<WorkshopMetadata>();

const columns = [
  columnHelper.accessor('date', { id: 'date' }),
  columnHelper.accessor('title', { id: 'title' }),
  columnHelper.accessor('details', { id: 'details' }),
  columnHelper.display({ cell: ({ row }) => row.original, id: 'action' }),
];

const WorkshopRow = ({ workshop }: { workshop: WorkshopMetadata }) => {
  const isOpen = workshop.status === 'Open';
  const [month, day] = workshop.date.split(' ');
  const [time, location] = workshop.details.split(' \u2022 ');
  const dateBgClassName = isOpen
    ? 'bg-[#b6dcd8] text-teal-900'
    : 'bg-amber-100 text-amber-900';

  return (
    <div className="flex flex-col gap-3 px-5 py-5 sm:px-8 md:flex-row md:items-center md:gap-0">
      {/* Date tile + Title */}
      <div className="flex items-center gap-4 md:min-w-0 md:flex-1">
        <div
          className={`flex h-13 w-13 shrink-0 flex-col items-center justify-center rounded-xl ${dateBgClassName}`}
        >
          <span className="text-[10px] font-semibold tracking-widest uppercase opacity-60">
            {month}
          </span>
          <span className="font-display text-2xl leading-none font-black">
            {day}
          </span>
        </div>
        <p className="min-w-0 flex-1 font-display text-lg font-semibold text-gray-900 md:truncate md:text-lg">
          {workshop.title}
        </p>
      </div>

      {/* Time (mobile only row) */}
      <span className="flex items-center gap-1.5 pl-17 text-sm whitespace-nowrap text-gray-500 md:hidden">
        <ClockIcon className="shrink-0" size={14} />
        {time}
      </span>

      {/* Location + BMS + Details (mobile: one row, right-aligned action) */}
      <div className="flex items-center gap-3 pl-17 md:pl-0">
        {/* Time (desktop only) */}
        <div aria-hidden className="hidden h-6 w-px bg-gray-200 md:block" />
        <span className="hidden items-center gap-1.5 text-sm whitespace-nowrap text-gray-500 md:flex md:px-2">
          <ClockIcon className="shrink-0" size={14} />
          {time}
        </span>

        <div aria-hidden className="hidden h-6 w-px bg-gray-200 md:block" />

        <span className="flex items-center gap-1.5 text-sm text-gray-500 md:px-2">
          <MapPinIcon className="shrink-0" size={14} />
          {location}
        </span>

        <a
          className="ml-auto flex items-center gap-2"
          href={workshop.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="h-10 shrink-0 rounded-lg border border-gray-900 bg-white px-5 text-sm font-semibold text-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-px hover:translate-y-px hover:bg-gray-50 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            <Image
              alt="BookMyShow"
              className="size-5 shrink-0 rounded"
              height={34}
              src="/assets/bms.png"
              width={34}
            />
            {workshop.actionLabel}
            <svg
              aria-hidden="true"
              className="ml-1 size-3.5"
              fill="none"
              height={14}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width={14}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </a>
      </div>
    </div>
  );
};

export const UpcomingSection = () => {
  const table = useReactTable({
    columns,
    data: upcomingWorkshops,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  return (
    <section className="bg-background-cream pt-16 pb-28" id="upcoming">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-1 text-sm font-semibold tracking-widest text-teal-600 uppercase">
            Schedule
          </p>
          <h3 className="font-display text-4xl font-semibold text-gray-900">
            Upcoming Workshops
          </h3>
        </div>

        {/* Container */}
        <Card className="overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          {rows.map((row, index) => (
            <div key={row.id}>
              <WorkshopRow workshop={row.original} />
              {index < rows.length - 1 && <Separator className="bg-gray-200" />}
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import {
  Page,
  Button,
  DataTable,
  Text,
  Inline,
  Stack,
  IconChevronLeft,
  IconChevronRight,
} from '@7shifts/sous-chef';
import type { DataTableColumn } from '@7shifts/sous-chef';

type Shift = {
  employee: string;
  role: string;
  date: string;
  start: string;
  end: string;
  hours: string;
};

const COLUMNS: DataTableColumn[] = [
  { name: 'employee', label: 'Employee' },
  { name: 'role', label: 'Role' },
  { name: 'date', label: 'Date' },
  { name: 'start', label: 'Start' },
  { name: 'end', label: 'End' },
  { name: 'hours', label: 'Hours' },
];

const SAMPLE_SHIFTS: Shift[] = [
  { employee: 'Jordan Patel',  role: 'Server',      date: 'Mon, Apr 28', start: '9:00 AM',  end: '5:00 PM',  hours: '8h' },
  { employee: 'Alex Rivera',   role: 'Bartender',   date: 'Mon, Apr 28', start: '4:00 PM',  end: '12:00 AM', hours: '8h' },
  { employee: 'Sam Kim',       role: 'Host',        date: 'Tue, Apr 29', start: '11:00 AM', end: '7:00 PM',  hours: '8h' },
  { employee: 'Taylor Moore',  role: 'Cook',        date: 'Tue, Apr 29', start: '7:00 AM',  end: '3:00 PM',  hours: '8h' },
  { employee: 'Jamie Chen',    role: 'Server',      date: 'Wed, Apr 30', start: '12:00 PM', end: '8:00 PM',  hours: '8h' },
  { employee: 'Morgan Lee',    role: 'Manager',     date: 'Wed, Apr 30', start: '8:00 AM',  end: '4:00 PM',  hours: '8h' },
  { employee: 'Jordan Patel',  role: 'Server',      date: 'Thu, May 1',  start: '9:00 AM',  end: '5:00 PM',  hours: '8h' },
  { employee: 'Riley Wang',    role: 'Dishwasher',  date: 'Fri, May 2',  start: '11:00 AM', end: '7:00 PM',  hours: '8h' },
];

const getWeekStart = (date: Date): Date => {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day + (day === 0 ? -6 : 1));
  d.setHours(0, 0, 0, 0);
  return d;
};

const formatWeekLabel = (weekStart: Date): string => {
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return `${fmt(weekStart)} – ${fmt(weekEnd)}, ${weekEnd.getFullYear()}`;
};

const Schedule = () => {
  const [weekStart, setWeekStart] = useState(() => getWeekStart(new Date()));

  const goToPrevWeek = () =>
    setWeekStart((prev) => {
      const d = new Date(prev);
      d.setDate(d.getDate() - 7);
      return d;
    });

  const goToNextWeek = () =>
    setWeekStart((prev) => {
      const d = new Date(prev);
      d.setDate(d.getDate() + 7);
      return d;
    });

  return (
    <Page
      title="Schedule"
      subtitle="Weekly shift schedule"
      actions={<Button theme="primary">Publish schedule</Button>}
      size="fullwidth"
    >
      <Stack space={24}>
        <Inline space={8} alignItems="center">
          <Button theme="link-icon" onClick={goToPrevWeek} testId="prev-week-btn">
            <IconChevronLeft role="img" aria-label="Previous week" />
          </Button>
          <Text as="body" emphasis="bold">
            {formatWeekLabel(weekStart)}
          </Text>
          <Button theme="link-icon" onClick={goToNextWeek} testId="next-week-btn">
            <IconChevronRight role="img" aria-label="Next week" />
          </Button>
        </Inline>

        <DataTable<Shift>
          columns={COLUMNS}
          items={SAMPLE_SHIFTS}
          emptyState={{
            title: 'No shifts scheduled',
            caption: 'Add shifts to see them here.',
          }}
        />
      </Stack>
    </Page>
  );
};

export default Schedule;

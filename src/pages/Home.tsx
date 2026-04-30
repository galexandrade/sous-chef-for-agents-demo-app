import React from 'react';
import {
  Page,
  Card,
  Stack,
  Inline,
  Text,
  Button,
  ActionList,
  ActionListItem,
  IconUsers,
  IconCalendarWeek,
  IconClockExclamation,
  IconCalendarCheck,
  IconClockRewind,
  IconCheck,
  IconUserPlus,
  IconDollarSign,
} from '@7shifts/sous-chef';
import type { ActionListItemTheme } from '@7shifts/sous-chef';

type StatCard = { label: string; value: string; icon: React.ReactElement };
type ActivityItem = {
  title: string;
  timestamp: string;
  theme: ActionListItemTheme;
  icon: React.ReactElement;
};

const STAT_CARDS: StatCard[] = [
  { label: 'Total Employees', value: '24',  icon: <IconUsers /> },
  { label: 'Shifts This Week', value: '87', icon: <IconCalendarWeek /> },
  { label: 'Pending Approvals', value: '5', icon: <IconClockExclamation /> },
];

const RECENT_ACTIVITY: ActivityItem[] = [
  { title: 'John added a shift',          timestamp: 'Today at 9:14 AM',      theme: 'success', icon: <IconCalendarCheck /> },
  { title: 'Sarah requested time off',    timestamp: 'Today at 8:52 AM',      theme: 'info',    icon: <IconClockRewind /> },
  { title: 'Manager approved 3 shifts',   timestamp: 'Yesterday at 5:30 PM',  theme: 'success', icon: <IconCheck /> },
  { title: 'Alex joined as new employee', timestamp: 'Yesterday at 2:15 PM',  theme: 'neutral', icon: <IconUserPlus /> },
  { title: 'Weekly payroll processed',    timestamp: 'Apr 25 at 10:00 AM',    theme: 'info',    icon: <IconDollarSign /> },
];

const Home = () => {
  return (
    <Page title="Dashboard" subtitle="Welcome back! Here's what's happening this week.">
      <Stack space={32}>
        <Stack space={16}>
          <Text as="h2" emphasis="bold">Overview</Text>
          <Inline space={16} flex={[1, 1, 1]}>
            {STAT_CARDS.map(({ label, value, icon }) => (
              <Card key={label}>
                <Stack space={8}>
                  <Inline space={8} alignItems="center">
                    {icon}
                    <Text as="caption">{label}</Text>
                  </Inline>
                  <Text as="body" emphasis="bold">{value}</Text>
                </Stack>
              </Card>
            ))}
          </Inline>
        </Stack>

        <Stack space={16}>
          <Text as="h2" emphasis="bold">Recent Activity</Text>
          <ActionList>
            {RECENT_ACTIVITY.map(({ title, timestamp, theme, icon }) => (
              <ActionListItem key={title} title={title} icon={icon} theme={theme}>
                {timestamp}
              </ActionListItem>
            ))}
          </ActionList>
        </Stack>

        <Stack space={16}>
          <Text as="h2" emphasis="bold">Quick Actions</Text>
          <Inline space={12}>
            <Button theme="primary">Build Schedule</Button>
            <Button theme="default">Add Employee</Button>
            <Button theme="default">Run Payroll</Button>
          </Inline>
        </Stack>
      </Stack>
    </Page>
  );
};

export default Home;

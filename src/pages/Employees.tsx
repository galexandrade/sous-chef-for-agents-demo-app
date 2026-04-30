import { useState } from 'react';
import {
    ActionList,
    ActionListItem,
    Avatar,
    Button,
    Dropdown,
    DropdownList,
    DropdownListDivider,
    DropdownListItem,
    IconBan,
    IconChevronDown,
    IconComment,
    IconWrench,
    IconMapMarker,
    IconPlus,
    IconSearch,
    IconSitemap,
    IconUser,
    IconUsers,
    InlineBanner,
    Inline,
    Page,
    PageLayout,
    PaginationControls,
    SegmentedControl,
    Stack,
    Text,
    TextField,
    ToolbarSelect,
} from '@7shifts/sous-chef';

const EMPLOYEES = [
    { name: 'Befucec Ronaso',     color: '#8aab82' },
    { name: 'Bixab Paleg',        color: '#8fa3b1' },
    { name: 'Bokeko Xuwakawu',    color: '#44a49a' },
    { name: 'Boxetov Page',       color: '#7fab94' },
    { name: 'Busupi Qobogooi',    color: '#9aaab4' },
    { name: 'Ceve Sokogoya',      color: '#3d9e8c' },
    { name: 'Conap Zinji',        color: '#6b7ab4' },
    { name: 'Dawa Vasaq',         color: '#c08080' },
    { name: 'Didop Yerij',        color: '#8fa3b1' },
    { name: 'Dubima Qoperek',     color: '#7fab94' },
    { name: 'Fajiru Mikahapiku',  color: '#7fab94' },
    { name: 'Fibuju Palagi',      color: '#8aab82' },
    { name: 'Fozavoyi Vucujexe',  color: '#b08b5a' },
    { name: 'Fozesug Leniz',      color: '#8aab82' },
    { name: 'Gasor Vopad',        color: '#6b7ab4' },
];

const LOCATION_OPTIONS   = [{ value: 'all', label: 'All locations' },   { value: 'downtown', label: 'Downtown' }];
const DEPARTMENT_OPTIONS = [{ value: 'all', label: 'All departments' }, { value: 'kitchen',  label: 'Kitchen' }];
const ROLE_OPTIONS       = [{ value: 'all', label: 'All roles' },       { value: 'manager',  label: 'Manager' }];
const TYPE_OPTIONS       = [{ value: 'all', label: 'All employee types' }, { value: 'full', label: 'Full-time' }];
const STATUS_OPTIONS     = [{ value: 'all', label: 'All statuses' },    { value: 'active',   label: 'Active' }];

const TABS = ['Active Employees', 'Pending Employees', 'Inactive Employees'];

const Employees = () => {
    const [tab, setTab] = useState('Active Employees');
    const [showBanner, setShowBanner] = useState(true);
    const [location, setLocation]         = useState(LOCATION_OPTIONS[0]);
    const [department, setDepartment]     = useState(DEPARTMENT_OPTIONS[0]);
    const [role, setRole]                 = useState(ROLE_OPTIONS[0]);
    const [employeeType, setEmployeeType] = useState(TYPE_OPTIONS[0]);
    const [status, setStatus]             = useState(STATUS_OPTIONS[0]);

    return (
        <PageLayout
            title="Employees"
            menu={[
                { to: '/employees', label: 'View Employees', isActive: true,  isVisible: true },
                { to: '/employees/import', label: 'Import', isVisible: true },
                { to: '/employees/onboarding', label: 'Onboarding', isVisible: true },
            ]}
        >
            <Page
                title="View Employees"
                actions={
                    <Inline space={8} alignItems="center">
                        <Dropdown
                            trigger={
                                <Button>
                                    <Inline space={4} alignItems="center">
                                        <IconWrench /> Bulk actions <IconChevronDown />
                                    </Inline>
                                </Button>
                            }
                        >
                            <DropdownList>
                                <DropdownListItem onClick={() => {}}>Send invite</DropdownListItem>
                                <DropdownListItem onClick={() => {}}>Deactivate employees</DropdownListItem>
                                <DropdownListDivider />
                                <DropdownListItem onClick={() => {}}>Export to CSV</DropdownListItem>
                            </DropdownList>
                        </Dropdown>
                        <Button theme="primary">
                            <Inline space={4} alignItems="center">
                                <IconPlus /> Add employee
                            </Inline>
                        </Button>
                    </Inline>
                }
            >
                <Stack space={16}>
                    <SegmentedControl
                        options={TABS}
                        value={tab}
                        onChange={setTab}
                    />

                    {showBanner && (
                        <InlineBanner
                            theme="warning"
                            title="4 employees to invite"
                            onClose={() => setShowBanner(false)}
                            primaryButton={<Button>Invite employees</Button>}
                        >
                            Employees need to be invited to view a published schedule or manage their time-off and availability.
                        </InlineBanner>
                    )}

                    <Stack space={8}>
                        <TextField
                            name="search"
                            placeholder="Search for an employee"
                            prefix={<IconSearch />}
                        />
                        <Inline space={8} flexWrap="wrap">
                            <ToolbarSelect
                                name="location"
                                options={LOCATION_OPTIONS}
                                value={location}
                                onChange={setLocation}
                                prefix={<IconMapMarker />}
                            />
                            <ToolbarSelect
                                name="department"
                                options={DEPARTMENT_OPTIONS}
                                value={department}
                                onChange={setDepartment}
                                prefix={<IconSitemap />}
                            />
                            <ToolbarSelect
                                name="role"
                                options={ROLE_OPTIONS}
                                value={role}
                                onChange={setRole}
                                prefix={<IconUser />}
                            />
                            <ToolbarSelect
                                name="employeeType"
                                options={TYPE_OPTIONS}
                                value={employeeType}
                                onChange={setEmployeeType}
                                prefix={<IconUsers />}
                            />
                            <ToolbarSelect
                                name="status"
                                options={STATUS_OPTIONS}
                                value={status}
                                onChange={setStatus}
                                prefix={<IconBan />}
                            />
                        </Inline>
                    </Stack>

                    <Stack space={8}>
                        <Text as="caption">Employee (82)</Text>
                        <ActionList>
                            {EMPLOYEES.map((emp) => (
                                <ActionListItem
                                    key={emp.name}
                                    title={emp.name}
                                    icon={<Avatar color={emp.color} size="small" />}
                                    actions={[
                                        {
                                            action: 'message',
                                            label: <IconComment />,
                                            onAction: () => {},
                                            showInKebab: false,
                                        },
                                        {
                                            action: 'edit',
                                            label: 'Edit employee',
                                            onAction: () => {},
                                            showInKebab: true,
                                        },
                                        {
                                            action: 'view',
                                            label: 'View profile',
                                            onAction: () => {},
                                            showInKebab: true,
                                        },
                                    ]}
                                />
                            ))}
                        </ActionList>
                    </Stack>

                    <PaginationControls
                        hasPrevious={false}
                        hasNext={true}
                        onPreviousClick={() => {}}
                        onNextClick={() => {}}
                    />
                </Stack>
            </Page>
        </PageLayout>
    );
};

export default Employees;

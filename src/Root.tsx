import {
    DropdownList,
    DropdownListItem,
    IconTachometer,
    IconCalendarAlt,
    IconAddressBook,
    IconBalanceScale,
} from '@7shifts/sous-chef';
import { LayoutFrame } from 'app-layout-frame';
import type { NavBarItems } from 'app-layout-frame/dist/layout/types';
import logo from './assets/sous-chef-logo.png';
import { Outlet } from 'react-router-dom';

function Root() {
    const NAV_ITEMS: NavBarItems = [
        {
            label: 'Home',
            isActive: false,
            isShowing: true,
            url: '/home',
            icon: IconTachometer
        },
        {
            label: 'Schedule',
            isActive: false,
            isShowing: true,
            url: '/schedule',
            icon: IconCalendarAlt
        },
        {
            label: 'Employees',
            isActive: false,
            isShowing: true,
            url: '/employees',
            icon: IconAddressBook
        },
        {
            label: 'Payroll',
            isActive: false,
            isShowing: true,
            url: '/payroll',
            icon: IconBalanceScale
        },
        {
            label: 'Update Payment',
            isActive: false,
            isShowing: true,
            url: '/update-payment',
            icon: IconBalanceScale
        },
    ];

    return (
        <LayoutFrame
            navItems={NAV_ITEMS}
            appLogo={<img src={logo} alt="App Logo" style={{ width: 30 }} />}
            companyName="Sous Chef for Agents"
            actions={[]}
            accountMenuDropdown={
                <DropdownList>
                    <DropdownListItem>Log out</DropdownListItem>
                </DropdownList>
            }
            userProfileImageURL="https://cdn.iconscout.com/icon/free/png-256/free-man-person-avatar-human-people-account-profile-icon-svg-download-png-20181.png"
        >
            <Outlet />
        </LayoutFrame>
    );
}

export default Root;

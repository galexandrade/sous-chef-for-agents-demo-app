import {
    DropdownList,
    DropdownListItem,
    IconTachometer
} from '@7shifts/sous-chef';
import { LayoutFrame } from 'app-layout-frame';
import type { NavBarItems } from 'app-layout-frame/dist/layout/types';
import logo from './assets/sous-chef-logo.png';
import { Outlet } from 'react-router-dom';

function Root() {
    const NAV_ITEMS: NavBarItems = [
        {
            label: 'Home',
            isActive: true,
            isShowing: true,
            url: '/home',
            icon: IconTachometer
        }
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

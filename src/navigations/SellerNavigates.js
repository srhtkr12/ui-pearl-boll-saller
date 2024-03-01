import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactsIcon from '@mui/icons-material/Contacts';
import InventoryIcon from '@mui/icons-material/Inventory';


export const SideNav = [
    {
        title: 'Home',
        path: '/apps/seller',
        icon: <HomeIcon />
    },
    {
        title: 'Profile',
        path: '/apps/seller/profile',
        icon: <PersonIcon />
    },
    {
        title: 'Inventory',
        path: '/apps/seller/inventory',
        icon: <InventoryIcon />
    },
]


export const Contacts = [
    {
        title: 'Help',
        path: '/apps/seller',
        icon: <PersonIcon />
    },
    {
        title: 'Contact',
        path: '/apps/seller',
        icon: <ContactsIcon />
    }
]


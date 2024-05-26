import {
  MdOutlineFormatAlignLeft,
  MdOutlineWbSunny,
  MdOutlineWorkOutline,
} from 'react-icons/md';
import { PiFlagLight, PiUsersThreeLight } from 'react-icons/pi';

export const sidebarData = [
  {
    id: 1,
    text: 'All',
    icon: <MdOutlineFormatAlignLeft />,
    url: '/dashboard/all',
  },
  {
    id: 2,
    text: 'Today',
    icon: <MdOutlineWbSunny />,
    url: '/dashboard/today',
  },
  {
    id: 3,
    text: 'Important',
    icon: <PiFlagLight />,
    url: '/dashboard/important',
  },
  {
    id: 4,
    text: 'Work',
    icon: <MdOutlineWorkOutline />,
    url: '/dashboard/work',
  },
  {
    id: 5,
    text: 'Family',
    icon: <PiUsersThreeLight />,
    url: '/dashboard/family',
  },
  {
    id: 6,
    text: 'Friends',
    icon: <PiUsersThreeLight />,
    url: '/dashboard/friends',
  },
];

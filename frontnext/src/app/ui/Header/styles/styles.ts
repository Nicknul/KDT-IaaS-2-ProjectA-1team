import {
  ButtonBackgroundColors,
  NoButtonRound,
  FlexRow,
} from '../../styles/CommonStyles';

export const Header =
  'h-16 flex items-center justify-between bg-gray-100 relative shadow-lg';
export const HeaderLeft = 'flex items-center mr-4';
export const HeaderCenter = 'flex flex-grow justify-end';
export const HeaderRight = 'flex items-center ml-4 pr-2.5';
export const HeaderButton = `w-36 h-16 ${NoButtonRound} ${ButtonBackgroundColors('gray', 100)}`;
export const HeaderButtonLogout = `${FlexRow} text-sm font-bold underline`;
export const HeaderSpan = `font-bold mr-4`;

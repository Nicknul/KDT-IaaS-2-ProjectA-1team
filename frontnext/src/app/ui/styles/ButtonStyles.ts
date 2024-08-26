import {
  ButtonBase,
  ButtonBackgroundColors,
  BorderStyles,
} from './CommonStyles';

const button = {
  // Modal 버튼 스타일
  ModalCloseButton: 'top-2 right-2 ',

  // ! Confirm 버튼 스타일
  ConfirmButton:
    'bg-blue-500 hover:bg-blue-600 mt-4 px-4 py-2 rounded-lg text-white',

  // 테이블 생성 버튼 스타일
  CreateTableButton: 'px-4 py-2 text-white rounded-lg hover:bg-blue-600',
  CreateTableAddButton: 'bg-gray-600 hover:bg-gray-500',
  CreateTableCreateButton: 'bg-blue-600 hover:bg-blue-500',
  CreateTableRecommendButton:
    'px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500',
  CreateTableButtonRow: 'flex justify-between items-center w-full mt-4',

  // 로그인 버튼, 카드 버튼 스타일
  login:
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',

  // 사이드바 버튼 스타일
  SidebarButton: 'px-4 py-2 rounded-lg text-white hover:bg-blue-500', // !
  SidebarAddColumnButton: 'bg-orange-500 hover:bg-orange-600', // !
  SidebarSaveButton:
    'bg-blue-500 hover:bg-blue-600 mt-4 px-4 py-2 rounded-full text-white', // !

  // 메인 컨텐츠 삭제 버튼 스타일
  MainContentDeleteColumnButton:
    'top-1/2 right-1 transform -translate-y-1/2 text-sm w-6 h-6 flex items-center justify-center',
  MainContentDeleteRowButton:
    'left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600',

  // 헤더 버튼 스타일
  HeaderButton:
    'w-36 h-16 bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200',

  // 설정 탭 토글 버튼 스타일
  SettingToggleButton:
    'fixed right-4 top-15 text-black p-2 rounded cursor-pointer z-50 transition-all duration-300 text-xl',

  // 설정 버튼 스타일
  SettingButton:
    'w-full px-4 py-2 rounded-lg hover:bg-gray-700 active:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 cursor-pointer text-center mb-4',

  // 비밀번호 변경 버튼 스타일
  PasswordButton:
    'w-full py-2 px-4 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 mt-2 bg-transparent border border-gray-800 hover:bg-red-500 hover:text-white hover:border-transparent',
  PasswordSubmitButton:
    'w-full py-2 px-4 rounded-lg bg-blue-500 text-white text-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 mt-4',

  // 토글 버튼 스타일
  ToggleButton: 'self-end text-gray-800 font-bold',
  ToggleSubmit: 'transition duration-300',
};

export default button;

export const BlueButton = `${ButtonBase} ${ButtonBackgroundColors('blue', 500)} text-white`; // * 파랑색 버튼
export const GrayButton = `${ButtonBase} ${ButtonBackgroundColors('gray', 500)} text-black`; // * 회색 버튼
export const RedButton = `${ButtonBase} ${ButtonBackgroundColors('red', 500)} text-white`; // * 빨강색 버튼
export const borderButton = `${ButtonBase} ${BorderStyles(2, 'gray', 500)} hover:text-white`; // * 회색 테두리 버튼
export const CloseButton = 'top-2 right-2 absolute text-gray-500'; // * modal 닫기 버튼

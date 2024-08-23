const common = {
  // 테두리 스타일
  border2px: 'border-2 border-gray-500 hover:bg-gray-600',
  border4px: 'border-4 border-gray-500 hover:bg-gray-600',
  border6px: 'border-6 border-gray-500 hover:bg-gray-600',

  // 글자 스타일
  textGray: 'text-gray-500 hover:text-gray-600',
  textBlack: 'text-black',
  textWhite: 'text-white',
};

export const ButtonBase =
  'rounded-lg shadow-lg py-2 px-4 cursor-pointer transition duration-300'; // * 라운드 및 쉐도우가 있는 버튼 베이스
export const NoButtonRound = 'py-2 px-4 cursor-pointer transition duration-300'; // ! 라운드 및 쉐도우 없는 버튼 베이스

// * flex 스타일
export const FlexColumn = 'flex flex-col items-center justify-center';
export const FlexRow = 'flex items-center';

/**
 * * 버튼 백그라운드 색상
 * @param colorNames 버튼 색상의 이름 예시) gray, blue 등
 * @param colorNumber 번튼 색상의 진하기 예시) 500, 600 등
 * @returns 버튼 백그라운드, 호버 백그라운드 색상 코드
 */
export const ButtonBackgroundColors = (
  colorNames: string,
  colorNumber: number,
): string => {
  return `bg-${colorNames}-${colorNumber} hover:bg-${colorNames}-${colorNumber + 100}`;
};

/**
 * * 버튼 테두리 설정
 * @param borderSize 테두리 사이즈
 * @param borderColor 테두리 색상
 * @param colorNumber 색상 진하기
 * @returns 테두리 있는 버튼 스타일
 */
export const BorderStyles = (
  borderSize: number,
  borderColor: string,
  colorNumber: number,
): string => {
  return `border-${borderSize} border-${borderColor}-${colorNumber} hover:bg-${borderColor}-${colorNumber + 100}`;
};

export const TextStyles = (color: string, colorNumber: number = 0): string => {
  return `text-${color}-${colorNumber}`;
};

export default common;

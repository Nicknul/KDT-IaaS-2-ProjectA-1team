// Modal Component Style
import { FlexRow } from '../../styles/CommonStyles';
import { BlueButton } from '../../styles/ButtonStyles';

export const ModalOverlay = `fixed inset-0 ${FlexRow} bg-black/50 z-50`;
export const ModalWindow =
  'p-6 rounded-lg relative max-w-lg w-full mx-4 backdrop-blur-lg bg-white/80 text-center';
export const ModalText = 'text-gray-800 text-lg';
export const ConfirmButton = `${BlueButton}`;

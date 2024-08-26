// components/Modal.tsx
import React from 'react';
import TotalStyles from '../styles/TotalStyles';
import button from '../styles/ButtonStyles';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={TotalStyles.ModalOverlay}>
      <div className={TotalStyles.ModalContent}>
        <button
          className={`${button.ModalCloseButton} absolute text-gray-500`}
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

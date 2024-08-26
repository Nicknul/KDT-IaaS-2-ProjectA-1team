// components/Modal.tsx
import React from 'react';
import { CloseButton } from '../styles/ButtonStyles';
import { ModalOverlay, ModalWindow } from './styles/ModalStyles';

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
    <div className={ModalOverlay}>
      <div className={ModalWindow}>
        <button className={CloseButton} onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

// components/Modal.tsx
import React from 'react';
import { CloseButton } from '../styles/ButtonStyles';
import { ModalOverlay, ModalContent } from './styles/ModalStyles';

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
      <div className={ModalContent}>
        <button className={CloseButton} onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

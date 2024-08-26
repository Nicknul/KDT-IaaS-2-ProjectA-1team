// components/ConfirmModal.tsx
import React from 'react';
import Modal from '@/app/ui/Modal-Test/modalComponent';
import { GrayButton, BlueButton } from '@/app/ui/styles/ButtonStyles';
import { ConfirmModalProps } from './ModalProps';

interface ConfirmModalContentProps extends ConfirmModalProps {
  message: React.ReactNode;
}

const ConfirmModal: React.FC<ConfirmModalContentProps> = ({
  show,
  onConfirm,
  onClose,
  message,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      {message}
      <div className="flex justify-end space-x-4">
        <button className={GrayButton} onClick={onClose}>
          취소
        </button>
        <button className={BlueButton} onClick={onConfirm}>
          확인
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;

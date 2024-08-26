// components/ConfirmNavigateModal.tsx
import React from 'react';
import ConfirmModal from './components/ConfirmModal';
import { ConfirmModalProps } from './components/ModalProps';

const ConfirmNavigateModal: React.FC<ConfirmModalProps> = (props) => {
  return (
    <ConfirmModal
      {...props}
      message={
        <>
          저장하지 않고 나가시겠습니까? <br />
          변경사항이 저장되지 않을 수 있습니다.
        </>
      }
    />
  );
};

export default ConfirmNavigateModal;

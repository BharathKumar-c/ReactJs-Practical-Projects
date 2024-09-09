import React from 'react';
import {IoClose} from 'react-icons/io5';

const CustomModal = ({
  onClose,
  header = <div>header</div>,
  footer = <div>footer</div>,
  body = <div>body</div>,
}) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-contaier" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <div>{header}</div>
          <IoClose size={20} className="close-icon" onClick={onClose} />
        </div>
        <div className="body">{body}</div>
        <div className="footer">{footer}</div>
      </div>
    </div>
  );
};

export default CustomModal;

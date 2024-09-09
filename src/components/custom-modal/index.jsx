import React, {useState} from 'react';
import './style.css';
import CustomModal from './custom-modal';

const CustomModalTest = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const header = <div>Custom Modal Header</div>;
  const footer = <div>footer</div>;
  const body = (
    <div>
      <p>This is my custom body content...</p>
      <p>It is reuseable also...</p>
    </div>
  );

  return (
    <div className="test-container">
      <button
        type="button"
        className="show-modal-btn"
        onClick={handleShowModal}>
        Show Modal
      </button>
      {showModal ? (
        <CustomModal
          onClose={handleShowModal}
          header={header}
          footer={footer}
          body={body}
        />
      ) : null}
    </div>
  );
};

export default CustomModalTest;

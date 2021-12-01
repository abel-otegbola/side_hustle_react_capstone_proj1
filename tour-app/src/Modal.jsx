import React from 'react';

const Modal = ({ show, onClose, handleRemove }) => {
  if (!show) {
    return null;
  }
  return (
    <div className='modal' onClick={onClose}>
      <div className='modal_container' onClick={(e) => e.stopPropagation()}>
        <div className='modal_hd'>
          <div className='modal_title'>
            <h3>Are you sure?</h3>
          </div>
        </div>
        <div className='modal_body'>
          <button onClick={handleRemove}>Yes</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

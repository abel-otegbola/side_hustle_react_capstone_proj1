import React from 'react';

const Modal = () => {
  return (
    <div className='modal'>
      <div className='modal_container' onClick={(e) => e.stopPropagation()}>
        <div className='modal_hd'>
          <div className='modal_title'>
            <h3>Are you sure?</h3>
          </div>
        </div>
        <div className='modal_body'>
          <button>Yes</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { Toast, ToastContainer } from 'react-bootstrap';
import classNames from 'classnames';

function Toaster(props) {
  const { showToast, title, message, onClose, type, textColor } = props;

  const bodyClass = classNames({
    'text-white': textColor === 'white', 
    'text-black': textColor === 'black' 
  });

  return (
    <ToastContainer position="top-center">
      <Toast onClose={onClose} show={showToast} delay={3000} autohide bg={type}>
        <Toast.Header>
          <strong className="me-auto">
            {title}
          </strong>
        </Toast.Header>
        <Toast.Body>
          <p className={bodyClass}>
            {message}
          </p>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;

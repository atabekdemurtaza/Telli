import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ErrorModalRegistrationForm({ show, handleClose, errorMessage }) {
    let messageToShow = errorMessage;

    if (errorMessage === '{"email":["This field is required."],"username":["This field is required."],"first_name":["This field is required."],"last_name":["This field is required."],"password":["This field is required."]}') {
        messageToShow = "Please enter your email and password.";
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {typeof messageToShow === 'object' ? JSON.stringify(messageToShow) : messageToShow}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModalRegistrationForm;

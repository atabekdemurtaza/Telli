import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ErrorModal({ show, handleClose, errorMessage }) {
    let messageToShow = errorMessage;

    if (errorMessage === '{"detail":"No active account found with the given credentials"}') {
        messageToShow = "Invalid credentials. Please check your email and password and try again";
    } else if (errorMessage === '{"email":["This field is required."],"password":["This field is required."]}') {
        messageToShow = "Please enter your email and password.";
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {messageToShow}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModal;

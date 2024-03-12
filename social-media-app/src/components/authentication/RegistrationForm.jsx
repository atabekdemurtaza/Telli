import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useUserActions } from '../../hooks/user.actions';
import ErrorModalRegistrationForm from '../errors/ErrorModalRegistrationForm';


function RegistrationForm() {

    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const userActions = useUserActions();

    const handleSubmit = (event) => {
        event.preventDefault();
        const registrationForm = event.currentTarget;
    
        if (registrationForm.checkValidity() === false) {
          event.stopPropagation();
        }
    
        setValidated(true);

        const data = {
            username: form.username,
            password: form.password,
            email: form.email,
            first_name: form.first_name,
            last_name: form.last_name,
            bio: form.bio,
        };

        userActions.register(data)
            .catch((err) => {
                if (err.message) {
                    const errorMessage = JSON.parse(err.request.response)
                    setError(errorMessage);
                    setShowErrorModal(true);
                }
            })
    };

    const handleCloseErrorModal = () => {
        setShowErrorModal(false);
    };

    return (
        <>
            <Form 
                id="registration-form" 
                className="border p-4 rounded" 
                noValidate validated={validated} 
                onSubmit={handleSubmit}>
                
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        value={form.first_name || ''} 
                        onChange={(e) => setForm({...form, first_name: e.target.value})} 
                        required 
                        type="text" 
                        placeholder="Enter first name"/>
                    <Form.Control.Feedback type="invalid">
                        This field is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        value={form.last_name} 
                        onChange={(e) => setForm({...form, last_name: e.target.value})} 
                        required 
                        type="text" 
                        placeholder="Enter last name"/>
                    <Form.Control.Feedback type="invalid">
                        This file is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        value={form.username} 
                        onChange={(e) => setForm({...form, username: e.target.value})} 
                        required 
                        type="text" 
                        placeholder="Enter username"/>
                    <Form.Control.Feedback type="invalid">
                        This file is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        value={form.email} 
                        onChange={(e) => setForm({...form, email: e.target.value})} 
                        required 
                        type="email" 
                        placeholder="Enter email"/>
                    <Form.Control.Feedback type="invalid">
                        This file is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        value={form.password} 
                        onChange={(e) => setForm({...form, password: e.target.value})} 
                        required
                        minLength={"8"} 
                        type="password" 
                        placeholder="Enter password"/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control 
                        value={form.bio} 
                        onChange={(e) => setForm({...form, bio: e.target.value})}  
                        type="textarea"
                        rows={3} 
                        placeholder="Enter a simple bio ... (optional)"/>
                </Form.Group>

                <div className="text-content text-danger">
                    {error && Object.values(error).map((errorMessage, index) => (
                        <p key={index}>{errorMessage}</p>
                    ))}
                </div>

                <Button data-testid="submit-button" variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>

            <ErrorModalRegistrationForm
                show={showErrorModal} 
                handleClose={handleCloseErrorModal} 
                errorMessage={error} 
            />
        </>
    );
};

export default RegistrationForm;

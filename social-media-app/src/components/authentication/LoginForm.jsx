import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useUserActions } from '../../hooks/user.actions';
import ErrorModal from '../errors/ErrorModal';


function LoginForm() {
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const userActions = useUserActions();
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginForm = event.currentTarget;

        if (loginForm.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);

        const data = {
            email: form.username,
            password: form.password,
        };

        userActions.login(data)
            .catch((err) => {
                if (err.message) {
                    setError(err.request.response);
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
                noValidate 
                validated={validated} 
                onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        value={form.username || ''} 
                        onChange={(e) => setForm({...form, username: e.target.value})} 
                        required 
                        type="text" 
                        placeholder="Enter username"/>
                    <Form.Control.Feedback type="invalid">
                        This field is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <div className="d-flex align-items-center">
                        <Form.Control 
                            value={form.password || ''} 
                            onChange={(e) => setForm({...form, password: e.target.value})}
                            minLength={8} 
                            required 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password"/>
                        <Button variant="light" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </Button>
                    </div>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
            </Form>

            <ErrorModal 
                show={showErrorModal} 
                handleClose={handleCloseErrorModal} 
                errorMessage={error} 
            />
        </>
    )
}

export default LoginForm;

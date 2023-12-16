import React, { useContext, useState } from 'react';
import {Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');
    const {loginWithEmailAndPassword} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0'
    // console.log(from)



    const handlLoginButton = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email,password);

        loginWithEmailAndPassword(email,password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);
            setSuccess('Successfully login');
            event.target.reset();
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message)
        })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handlLoginButton}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />            
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br/>
                <Form.Text className="text-center">
                    Don't have an account?<Link to='/register'>Register</Link>
                </Form.Text>
                <br/>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <br/>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
         </Form>

        </Container>
    );
};

export default Login;
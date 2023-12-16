import React, { useContext, useState } from 'react';

import {Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    // console.log(createUser)
    const [acceptCondition,setAcceptCondition] = useState(false);
    const navigate = useNavigate();

    const handleAcceptButton = (event) =>{
        setAcceptCondition(event.target.checked);
    }

    const handleRegisterButton = (event) =>{
        event.preventDefault();
        setSuccess('');
        setError('');
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm.value;
        console.log(name,photo,email,password,confirmPassword)

        if(!/(?=.*[a-zA-Z])/.test(password)){
             setError('Must added alpha character in password field')
             return;
        }
        else if(!/(?=.*[!@#$%&?])/.test(password)){
            setError('Must added atleast 1 special character for your strong password')
            return
        }
        else if(password.length < 8){
            setError('Must password atleaset 8 character.')
            return
        }
        else if(password !== confirmPassword){
            setError('password and confirm password does not match')
            return 
        }

        createUser(email,password)
         .then(result =>{
            console.log(result.user);
            setSuccess('Successfully created accout');
            event.target.reset();
         })
         .catch(error =>{
            console.log(error);
            setError(error.message);
         })
         navigate('/category/0')
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegisterButton}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" required/>             
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Photo url" required/>             
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required/>             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAcceptButton} 
                    type="checkbox" 
                    name="accept" 
                    label={<>Accept <Link to='/termsCondition'>Terms and Conditions</Link></>} />
            </Form.Group>
            <Button 
              variant="primary" 
              type="submit"
              disabled= {!acceptCondition}
              >
                Register
            </Button>
            <br/>
            <Form.Text className="text-center">
                Already have an account?<Link to='/login'>Login</Link>
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

export default Register;
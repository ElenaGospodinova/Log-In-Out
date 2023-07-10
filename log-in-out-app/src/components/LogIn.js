import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../actions';
import CardsMain from './Cards';
import "./styles/LogIn.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LogIn = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    email: {
      required: true,
      message: 'Email is required',
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
      required: true,
      message: 'Password is required',
      min: 8
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFormErrors = {};
    Object.keys(errors).forEach((key) => {
      const field = formValues[key];
      const fieldErrors = [];

      if (errors[key].required && !field) {
        fieldErrors.push(errors[key].message);
      }

      if (errors[key].min && field.length < errors[key].min) {
        fieldErrors.push(`Minimum length is ${errors[key].min}`);
      }

      if (errors[key].pattern && !errors[key].pattern.test(field)) {
        fieldErrors.push('Invalid email');
      }

      newFormErrors[key] = fieldErrors.join(', ');
    });

    const hasErrors = Object.values(newFormErrors).some((error) => error);

    if (!hasErrors) {
      dispatch(logIn(formValues.email)); // Dispatch the login action with the email
      setIsSubmitted(true);
      alert('Welcome to Your Music World!');
    }

    setFormErrors(newFormErrors);
  };

  if (isSubmitted) {
    return <CardsMain />;
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            isInvalid={formErrors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            isInvalid={formErrors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className='btns'>
          LogIn
        </Button>
      </Form>
    </>
  );
};

export default LogIn;

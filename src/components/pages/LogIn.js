import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import CardsMain from '../Cards';
import "../../styles/LogIn.css";
import { red } from '@mui/material/colors';

const LogIn = () => {
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
      color: red,
      required: true,
      message: 'Email is required',
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
      color: red,
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

    setFormErrors(newFormErrors);

    const hasErrors = Object.values(newFormErrors).some((error) => error);

    if (!hasErrors) {
      // if is valid, proceed with login
      setIsSubmitted(true);
      alert("Welcome to Your Music World!");

    }
  };

  if (isSubmitted) {
    return <CardsMain />;
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            isInvalid={formErrors.email}

          />
          <Form.Control.Feedback type="invalid" style={{ color: 'red', fontSize: '1.3rem' }}>
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
          <Form.Control.Feedback type="invalid" style={{ color: 'red', fontSize: '1.3rem' }}>
            {formErrors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className='btns'>
          LogIn
        </Button>
      </Form>

      {/* Embedded video */}
    
    </>
  );
};

export default LogIn;

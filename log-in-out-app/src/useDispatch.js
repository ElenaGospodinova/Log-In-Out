import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from './actions';

// inside your LogIn component:
const dispatch = useDispatch();

// when a user successfully logs in:
dispatch(logIn(formValues.email));

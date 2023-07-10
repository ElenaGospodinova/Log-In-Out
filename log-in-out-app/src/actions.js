import { LOG_IN, LOG_OUT } from './actionTypes';

export const logIn = (email) => ({
  type: LOG_IN,
  payload: email,
});

export const logOut = () => ({
  type: LOG_OUT,
});

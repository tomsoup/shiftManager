// We import with {} because we are importing from multi action
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';


export const emailChanged = (text) => {
  // Action will always return object
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

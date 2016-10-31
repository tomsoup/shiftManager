import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log(action);
      // The payload is whatever was returned from snapshot.val()
      return action.payload;
    default:
      return state;
  }
};

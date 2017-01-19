// We import with {} because we are importing from multi action
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_CREATE_INIT
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMPLOYEE_CREATE_INIT:
      return INITIAL_STATE;
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      // !!!!! [action.payload.prop] is not an array !!!!!!

      // the [] is key interpolation
      // E.G const newState = {};
      // newState[action.oayload.prop] = action.payload.value

      // the prop will be determined at run time
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_CREATE:
      //we can just use INITIAL_STATE because we just need to rest everything
      return INITIAL_STATE;
    default:
      return state;
  }
};

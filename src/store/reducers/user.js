import { USER } from '../actions/user';

const initialState = {
  user: undefined,
  type: '',
  users: [],
  loaded: false
};

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case USER.GET_USER: {
      return {
        ...state,
        type: USER.GET_USER,
        loaded: false
      };
    }
    case USER.GET_USER_DONE: {
      console.log(USER.GET_USER_DONE, payload.user);
      return {
        ...state,
        type: USER.GET_USER_DONE,
        loaded: true,
        user: payload.user
      };
    }
    case USER.GET_USER_NOT_FOUND: {
      console.log(USER.GET_USER_NOT_FOUND, payload.user);
      return {
        ...state,
        type: USER.GET_USER_NOT_FOUND,
        loaded: true,
        user: payload.user
      };
    }
    case USER.GET_USER_FAIL: {
      console.log(payload.user);
      return {
        ...state,
        type: USER.GET_USER_FAIL,
        loaded: true,
        user: payload.user
      };
    }
    default:
      return state;
  }
};

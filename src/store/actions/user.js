export const USER = {
  GET_USER: 'USER_GET',
  GET_USER_DONE: 'USER_GET_DONE',
  GET_USER_FAIL: 'USER_GET_FAIL',
  GET_USER_NOT_FOUND: 'USER_GET_USER_NOT_FOUND',
  GET_USER_LOGOUT: 'USER_GET_USER_LOGOUT',
};

export const getUser = (userName, userPassword) => ({
  type: USER.GET_USER,
  userName,
  userPassword,
});

export const getUserDone = user => ({
  type: USER.GET_USER_DONE,
  user,
});

export const getUserFail = err => ({
  type: USER.GET_USER_FAIL,
  err,
});

export const getUserNotFound = user => ({
  type: USER.GET_USER_NOT_FOUND,
  user,
});

export const logoutUser = () => ({
  type: USER.GET_USER_LOGOUT,
  user: { name: '' },
});

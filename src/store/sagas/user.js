import { takeEvery, put } from 'redux-saga/effects';

import { USER } from '../actions/user';

function* getUser(payload) {
  const res = yield fetch('./users.json');
  const data = yield res.json();
  console.log(res, data);
  if (data) {
    let user = data.users.filter(user => {
      if (user.name === payload.userName && user.password === payload.userPassword) {
        return user;
      }
    });
    if (user.length != 0) {
      yield put({
        type: USER.GET_USER_DONE,
        user
      });
    } else {
      yield put({
        type: USER.GET_USER_NOT_FOUND,
        user: ''
      });
    }
  } else {
    yield put({
      type: USER.GET_USER_FAIL,
      user: 'File not loaded'
    });
  }
}

function* userSaga() {
  yield takeEvery(USER.GET_USER, getUser);
}

export default userSaga;

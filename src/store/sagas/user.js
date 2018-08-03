import { takeEvery, put } from 'redux-saga/effects';

import { USER } from '../actions/user';

function* getUser(payload) {
  const res = yield fetch('./users.json');
  const data = yield res.json();
  if (data) {
    let user = data.users.find(
      user => user.name === payload.userName && user.password === payload.userPassword
    );
    if (user) {
      delete user.password;
      yield put({
        type: USER.GET_USER_DONE,
        user
      });
    } else {
      yield put({
        type: USER.GET_USER_NOT_FOUND,
        user: { user: '' }
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

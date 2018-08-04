import { fork } from 'redux-saga/effects';
import userSaga from './user';
import menuSaga from './menu';

const sagas = [userSaga, menuSaga];

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}

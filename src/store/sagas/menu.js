import { takeEvery, put } from 'redux-saga/effects';

import { MENU } from '../actions/menu';

function* getMenu() {
  const res = yield fetch('./Butcherburgermenu.json');
  const menu = yield res.json();
  if (menu) {
    yield put({
      type: MENU.GET_MENU_DONE,
      menu: menu.categories,
    });
  } else {
    yield put({
      type: MENU.GET_MENU_FAIL,
      menu: 'File not loaded',
    });
  }
}

function* menuSaga() {
  yield takeEvery(MENU.GET_MENU, getMenu);
}

export default menuSaga;

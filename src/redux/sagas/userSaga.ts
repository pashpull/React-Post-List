import { delay, put, select, takeEvery } from 'redux-saga/effects';

import axios from 'axios';

import { getUser } from '../slices/userSlice';

const USER_URL = 'https://jsonplaceholder.typicode.com/users/';

function* workGetUserAxios(): any {
  let user;
  const store = yield select();
  yield axios
    .get(USER_URL + store.user.userId)
    .then((res) => (user = res.data));
  yield delay(500);
  yield put(getUser(user));
}

function* userSaga() {
  yield takeEvery('user/getUserLoading', workGetUserAxios);
}

export default userSaga;

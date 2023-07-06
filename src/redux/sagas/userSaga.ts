import { call, delay, put, select, takeEvery } from 'redux-saga/effects';

import axios from 'axios';

import { setUser, userRequestError } from '../slices/userSlice';
import { setError } from '../slices/errorsSlice';

const USER_URL = 'https://jsonplaceholder.typicode.com/users/';
const USER_POSTS_URL = (id: number) => {
  return `https://jsonplaceholder.typicode.com/users/${id}/posts`;
};

const userAxiosRequest = async (userId: number) => {
  let user;
  await axios.get(USER_URL + userId).then((res) => (user = res.data));
  return user;
};

const userPostsAxiosRequest = async (userId: number) => {
  let userComments;
  await axios
    .get(USER_POSTS_URL(userId))
    .then((res) => (userComments = res.data));
  return userComments;
};

function* workerGetUser(): any {
  try {
    const store = yield select();
    const user = {
      user: {},
      userPosts: [],
    };

    user.user = yield call(userAxiosRequest, store.user.userId);
    user.userPosts = yield call(userPostsAxiosRequest, store.user.userId);

    yield delay(500); // искуственная задержка для наглядности
    yield put(setUser(user));
  } catch {
    yield put(setError('User request failed.'));
    yield put(userRequestError('User request failed.'));
  }
}

function* userSaga() {
  yield takeEvery('user/userRequest', workerGetUser);
}

export default userSaga;

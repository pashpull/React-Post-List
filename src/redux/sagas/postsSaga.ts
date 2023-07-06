import { call, delay, put, takeEvery } from 'redux-saga/effects';

import axios from 'axios';

import { setPosts, postsRequestError } from '../slices/postsSlice';
import { setError } from '../slices/errorsSlice';

const ALL_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const postsAxiosRequest = async () => {
  let posts;
  await axios.get(ALL_POSTS_URL).then((res) => (posts = res.data));
  return posts;
};

function* workerGetPosts(): any {
  try {
    const posts = yield call(postsAxiosRequest);
    yield delay(500); // искуственная задержка для наглядности
    yield put(setPosts(posts));
  } catch {
    yield put(setError('Posts request failed.'));
    yield put(postsRequestError('Posts request failed.'));
  }
}

function* postsSaga() {
  yield takeEvery('posts/postsRequest', workerGetPosts);
}

export default postsSaga;

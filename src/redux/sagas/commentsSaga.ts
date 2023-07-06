import { call, delay, put, select, takeLeading } from 'redux-saga/effects';

import axios from 'axios';

import { commentsRequestError, setComments } from '../slices/commentsSlice';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?postId=';

const commentsAxiosRequest = async (postId: number) => {
  let comments;
  await axios.get(COMMENTS_URL + postId).then((res) => (comments = res.data));
  return comments;
};

function* workerGetComments(): any {
  try {
    const store = yield select();
    const comments = yield call(commentsAxiosRequest, store.comments.postId);
    yield delay(500); // искуственная задержка для наглядности
    yield put(setComments(comments));
  } catch {
    commentsRequestError('Comments request failed.');
  }
}

function* commentsSaga() {
  yield takeLeading('comments/commentsRequest', workerGetComments);
}

export default commentsSaga;

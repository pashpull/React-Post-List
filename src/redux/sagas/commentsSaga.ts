import { call, delay, put, select, takeLeading } from 'redux-saga/effects';

import axios from 'axios';

import { getComments } from '../slices/commentsSlice';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?postId=';

const getCommentsAxios = async (postId: number) => {
  let comments;
  await axios.get(COMMENTS_URL + postId).then((res) => (comments = res.data));
  return comments;
};

function* workerComments(): any {
  const store = yield select();
  const comments = yield call(getCommentsAxios, store.comments.postId);
  yield delay(500);
  yield put(getComments(comments));
}

function* commentsSaga() {
  yield takeLeading('comments/getCommentsLoading', workerComments);
}

export default commentsSaga;

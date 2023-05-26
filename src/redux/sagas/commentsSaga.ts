import { delay, put, select, takeEvery } from 'redux-saga/effects';

import axios from 'axios';

import { getComments } from '../slices/commentsSlice';

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?postId=';

function* workGetCommentsAxios(): any {
  let comments;
  const store = yield select();
  yield axios
    .get(COMMENTS_URL + store.comments.postId)
    .then((res) => (comments = res.data));
  yield delay(500);
  yield put(getComments(comments));
}

function* commentsSaga() {
  yield takeEvery('comments/getCommentsLoading', workGetCommentsAxios);
}

export default commentsSaga;

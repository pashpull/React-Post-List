import { put, takeEvery } from 'redux-saga/effects';

import axios from 'axios';

import { getPosts } from '../slices/postsSlice';

const ALL_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

function* workGetPostAxios(): any {
  let posts;
  yield axios.get(ALL_POSTS_URL).then((res) => (posts = res.data));
  yield put(getPosts(posts));
}

function* postsSaga() {
  yield takeEvery('posts/getPostsLoading', workGetPostAxios);
}

export default postsSaga;

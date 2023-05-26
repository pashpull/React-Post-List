import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import postsReducer from './slices/postsSlice';
import postsSaga from './sagas/postsSaga';

import commentsReducer from './slices/commentsSlice';
import commentsSaga from './sagas/commentsSaga';

import userReducer from './slices/userSlice';
import userSaga from './sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield all([commentsSaga(), postsSaga(), userSaga()]);
}

export const store = configureStore({
  devTools: true,
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

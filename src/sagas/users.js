import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
  take
} from 'redux-saga/effects';
import { getUsersSuccess, usersError, types } from '../actions/users';

import * as api from '../api/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    // following code will run only after the line above resolves
    yield put(
      getUsersSuccess({
        items: result.data.data
      })
    );
  } catch (e) {}
}

// watches for every time the getUserRequest action is dispatched
function* watchGetUsersRequest() {
  yield takeEvery(types.GET_USERS_REQUEST, getUsers);
}

function* createUser(action) {
  try {
    const { firstName, lastName } = action.payload;
    yield call(api.createUser, { firstName, lastName });
    yield call(getUsers);
  }
  catch {
    yield put(
      usersError({
        error: 'An error occurred when trying to create the user'
      })
    );
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({ userId }) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers); // get updated list of users
  }
  catch {
    yield put(
      usersError({
        error: 'An error occurred when trying to delete the user'
      })
    );
  }
}

function* watchDeleteUserRequest() {
  // waiting for the deleteUser saga to be
  // resolved before another delete operation can done.
  while (true) {
    const action = yield take(types.DELETE_USER_REQUEST);
    yield call(deleteUser, {
      userId: action.payload.userId
    });
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
];

export default usersSagas;

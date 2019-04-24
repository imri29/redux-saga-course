import { all } from 'redux-saga/effects';
import usersSagas from './users';

// root saga
// 'all' is similar to Promise.all()
function* rootSaga() {
  yield all([
    ...usersSagas
  ]);
}

export default rootSaga;
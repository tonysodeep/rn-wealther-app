import {call, put, takeEvery} from 'redux-saga/effects';
import wealtherApi from '../api/wealtherApi';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchWealther(action) {
  try {
    const response = yield wealtherApi.getWelther(action.cityName);
    yield put({type: 'FETCH_SUCCEEDED', receivedWealther: response});
  } catch (e) {
    yield put({type: 'FETCH_FAILED'});
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* mySaga() {
  yield takeEvery('FETCH_WEALTHER', fetchWealther);
}

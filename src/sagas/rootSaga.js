import {delay} from 'redux-saga';
import {all} from 'redux-saga/effects';
import {sayHello} from './wealtherSagas';

export default function* rootSaga() {
  yield all([sayHello]);
}

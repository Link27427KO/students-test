import { fork } from 'redux-saga/effects'

import studentSaga from '../students/sagas'

export default function* rootSaga() {
  yield fork(studentSaga)
}

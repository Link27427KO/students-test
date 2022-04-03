import { call, put, takeEvery } from 'redux-saga/effects'

import * as actions from './actions'
import { replace } from 'connected-react-router'
import {
  cleanObjectFromEmptyValues,
  formQueryString,
  replaceSortDir,
  ReplaceSortDirEnum,
} from '../../helpers/functions'
import { StudentsServices } from '../../services/students.services'
import { SagaIterator } from 'redux-saga'

function* fetchStudents(action: { type: string; payload?: any }): SagaIterator {
  const { payload } = action
  replaceSortDir(payload, ReplaceSortDirEnum.toValue)
  try {
    const data = yield call(StudentsServices.getStudents, {
      ...payload,
    })
    replaceSortDir(payload, ReplaceSortDirEnum.toKey)
    const filteredPayload: object = cleanObjectFromEmptyValues(payload)
    const searchString = formQueryString(filteredPayload)
    yield put(replace({ search: searchString }))
    yield put(
      actions.setStudentsPaginationResponse({
        page: Number(payload.page),
        totalPages: data.totalPages,
        size: Number(payload.size),
        totalCount: data.totalCount,
      }),
    )
    yield put(actions.getStudentsResponse(data.data))
  } catch (error) {
    yield put(actions.getStudentsError(error))
  }
}

export default function* saga(): SagaIterator {
  yield takeEvery(actions.getStudentsRequest, fetchStudents)
}

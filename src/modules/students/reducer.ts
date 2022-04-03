import { reducerWithInitialState } from 'typescript-fsa-reducers'

import * as actions from './actions'
import { IPaginationInput } from '../types'
import { IStudent, IStudentsFilters, SortByStudentsEnum, SortDirStudentsEnum } from './types'

export interface StoreState {
  readonly students: IStudent[]
  readonly loading: boolean
  readonly error?: any
  readonly pagination?: IPaginationInput
  readonly filters?: IStudentsFilters
}

const INITIAL_STATE: StoreState = {
  students: [],
  loading: true,
  pagination: { page: 1, size: 10, totalPages: 0, totalCount: 0 },
  filters: { sortBy: SortByStudentsEnum.name, sortDir: SortDirStudentsEnum.ASC },
}

export const reducer = reducerWithInitialState(INITIAL_STATE)

reducer.case(actions.getStudentsRequest, (state) => {
  return { ...state, error: undefined, loading: true }
})
reducer.case(actions.getStudentsResponse, (state, students) => {
  return { ...state, students, loading: false }
})
reducer.case(actions.getStudentsError, (state, error) => {
  return { ...state, error, loading: false }
})

reducer.case(actions.setStudentsPaginationResponse, (state, pagination) => {
  return { ...state, pagination }
})

reducer.case(actions.setStudentsFiltersResponse, (state, filters) => {
  return { ...state, filters }
})

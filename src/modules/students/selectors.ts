import { RootStoreState } from '../root'
import { IStudent, IStudentsFilters } from './types'
import { IPaginationInput } from '../types'

// @ts-ignore
export const studentsSelector = (state: RootStoreState) => state.students?.students as IStudent[]
// @ts-ignore
export const studentsLoadingSelector = (state: RootStoreState) => state.students?.loading as boolean
// @ts-ignore
export const studentsPaginationSelector = (state: RootStoreState) => state.students?.pagination as IPaginationInput
// @ts-ignore
export const studentsFiltersSelector = (state: RootStoreState) => state.students?.filters as IStudentsFilters

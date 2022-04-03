import actionCreatorFactory from 'typescript-fsa'

import { IStudentsFilters, IStudentsRequest, StudentsActionTypesEnum } from './types'
import { IPaginationInput } from '../types'

const actionCreator = actionCreatorFactory('NewCampaignCountry')

export const getStudentsRequest = actionCreator<IStudentsRequest>(StudentsActionTypesEnum.GET_STUDENTS_REQUEST)
export const getStudentsResponse = actionCreator<any>(StudentsActionTypesEnum.GET_STUDENTS_RESPONSE)
export const setStudentsPaginationResponse = actionCreator<IPaginationInput>(
  StudentsActionTypesEnum.SET_STUDENTS_PAGINATION_RESPONSE,
)
export const setStudentsFiltersResponse = actionCreator<IStudentsFilters>(
  StudentsActionTypesEnum.SET_STUDENTS_FILTERS_RESPONSE,
)
export const getStudentsError = actionCreator<any>(StudentsActionTypesEnum.GET_STUDENTS_ERROR)

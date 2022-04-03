export enum StudentsActionTypesEnum {
  GET_STUDENTS_REQUEST = 'GET_STUDENTS_REQUEST',
  GET_STUDENTS_RESPONSE = 'GET_STUDENTS_RESPONSE',
  SET_STUDENTS_PAGINATION_RESPONSE = 'SET_STUDENTS_PAGINATION_RESPONSE',
  SET_STUDENTS_FILTERS_RESPONSE = 'SET_STUDENTS_FILTERS_RESPONSE',
  GET_STUDENTS_ERROR = 'GET_STUDENTS_ERROR',
}

export interface IStudent {
  class: string
  id: number
  name: string
  parents: string[]
  score: string
  speed: string
  tests: ITest[]
}

export interface ITest {
  abcent: boolean
  concept: string
  date: string
  expSpeed: string
  label: string
  score: number
  speed: string
  total: number
}

export enum SortByStudentsEnum {
  name = 'name',
  class = 'class',
  score = 'score',
  speed = 'speed',
}

export enum SortDirStudentsEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum SortDirStudentsValuesEnum {
  ASC = '-1',
  DESC = '1',
}

export interface IStudentsRequest {
  page?: number
  size?: number
  search?: string
  sortBy?: SortByStudentsEnum
  sortDir?: SortDirStudentsEnum
}

export interface IStudentsFilters {
  search?: string
  sortBy?: SortByStudentsEnum
  sortDir?: SortDirStudentsEnum
}

export enum StudentsSortFieldsEnum {
  'name' = 'name',
  'class' = 'class',
  'score' = 'score',
  'speed' = 'speed',
}

export enum AvSpeedEnum {
  'Below Expected' = 'Below Expected',
  'Above Expected' = 'Above Expected',
  'As Expected' = 'As Expected',
}

import { AvSpeedEnum, IStudent, ITest, SortDirStudentsEnum, SortDirStudentsValuesEnum } from '../modules/students/types'

export const cleanObjectFromEmptyValues = (obj: any): object => {
  const copyObj = { ...obj }
  for (const propName in copyObj) {
    if (
      copyObj[propName] === null ||
      copyObj[propName] === undefined ||
      copyObj[propName] === 'undefined' ||
      copyObj[propName] === ''
    ) {
      delete copyObj[propName]
    }
  }
  return copyObj
}

export const formQueryString = (queries: object): string => {
  const queryString = Object.keys(queries)
    .map(function (key) {
      // @ts-ignore
      return key + '=' + queries[key]
    })
    .join('&')

  return `?${queryString}`
}

export const normalizeStudents = (data: IStudent[]) => {
  const newStudents: any[] = []
  data.map((item, index) => {
    newStudents.push({
      index,
      class: item.class,
      id: Number(item.id.toString() + index.toString()),
      name: item.name,
      parents: item.parents,
      score: item.score,
      speed: item.speed,
      tests: item.tests,
    })
  })

  return newStudents
}

export const substringStudentId = (id: number) => {
  return Number(id.toString().substring(0, id.toString().length - 1))
}

export const convertTablePages = (props: { page: number; size: number; totalCount: number }) => {
  const { page, totalCount, size } = props
  const lastElementNumber = page * size >= totalCount ? totalCount : page * size
  const firstElementNumber = page * size - size + 1
  return `${firstElementNumber}-${lastElementNumber} of ${totalCount}`
}

export const stringQuery = (props: any) => {
  let query = '?'
  Object.keys(props).map((key, index) => {
    if (props[key] && index !== Object.keys(props).length - 1) {
      query += `${key}=${props[key]}&`
    } else if (props[key]) {
      query += `${key}=${props[key]}`
    }
  })
  if (query === '?') {
    return ''
  }
  return query
}

export const getQuery = () => {
  let search = window.location.search
  const values = search
    .substring(1, search.length)
    .split('&')
    .map((item) => {
      return item.split('=')
    })
  const query: any = {}
  values.map((item) => {
    query[item[0]] = item[1]
  })
  return { query }
}

export enum ReplaceSortDirEnum {
  'toKey' = 'toKey',
  'toValue' = 'toValue',
}

export const replaceSortDir = (payload: any, value: ReplaceSortDirEnum) => {
  if (value === ReplaceSortDirEnum.toValue) {
    if (payload.sortDir && payload.sortDir === SortDirStudentsEnum.ASC) {
      payload.sortDir = SortDirStudentsValuesEnum.ASC
    } else if (payload.sortDir && payload.sortDir === SortDirStudentsEnum.DESC) {
      payload.sortDir = SortDirStudentsValuesEnum.DESC
    }
  } else if (value === ReplaceSortDirEnum.toKey) {
    if (payload.sortDir && payload.sortDir === SortDirStudentsValuesEnum.ASC) {
      payload.sortDir = SortDirStudentsEnum.ASC
    } else if (payload.sortDir && payload.sortDir === SortDirStudentsValuesEnum.DESC) {
      payload.sortDir = SortDirStudentsEnum.DESC
    }
  }
}

export const setAvScoreClassName = (score: string) => {
  const value = Number(score.substring(0, score.length - 1))
  if (value < 50) {
    return 'red-score'
  } else if (value >= 50 && value < 80) {
    return 'yellow-score'
  } else if (value >= 80 && value < 90) {
    return 'green-score'
  } else return 'blue-score'
}

export const countAvgScore = (score: number[]) => {
  let result = 0
  for (let i = 0; i < score.length; i++) {
    if (score) {
      result += score[i]
    }
  }
  return `${Math.round(result / score.length)}%`
}

export const setAvSpeed = (speed: string) => {
  switch (speed) {
    case AvSpeedEnum['As Expected']:
      return 'as-expected'
    case AvSpeedEnum['Above Expected']:
      return 'above-expected'
    case AvSpeedEnum['Below Expected']:
      return 'below-expected'
    default:
      return 'as-expected'
  }
}

export const normalizeParents = (parents: string[]) => {
  let value = ''
  for (let i = 0; i < parents.length; i++) {
    if (i !== parents.length - 1) {
      value += parents[i] + ', '
    } else {
      value += parents[i]
    }
  }
  return value
}

export const normalizeTests = (data: ITest[]) => {
  const newTests: any[] = []
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      newTests.push({
        id: i,
        date: 'APR 30 2019',
        // @ts-ignore
        abcent: data[i].abcent ?? true,
        concept: data[i].concept,
        expSpeed: data[i].expSpeed,
        label: data[i].label,
        score: data[i].score,
        speed: data[i].speed,
        total: data[i].total,
      })
    } else {
      newTests.push({
        id: i,
        // @ts-ignore
        abcent: data[i].abcent ?? true,
        concept: data[i].concept,
        date: data[i].date,
        expSpeed: data[i].expSpeed,
        label: data[i].label,
        score: data[i].score,
        speed: data[i].speed,
        total: data[i].total,
      })
    }
  }
  return newTests
}

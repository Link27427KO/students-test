import axios from 'axios'
import { BASE_URL } from '../constants/config'
import { IStudentsRequest } from '../modules/students/types'
import { stringQuery } from '../helpers/functions'

export class StudentsServices {
  static getStudents(props: IStudentsRequest) {
    return axios
      .get(`${BASE_URL}/data${stringQuery(props)}`)
      .then((res) => {
        return res.data
      })
      .catch((e) => {
        return e
      })
  }
}

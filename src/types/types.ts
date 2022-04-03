export enum tokenTypeEnum {
  'refreshToken' = 'refreshToken',
}

export interface IErrorResponseDefault {
  /**  */
  name: string

  /**  */
  message: string

  /**  */
  statusCode: number

  /**  */
  customStack?: object

  /**  */
  code?: string

  errors?: Record<string, string[]>
}
export interface IToastProps {
  severity?: string
  summary?: string
  life?: number
  detail?: string
}

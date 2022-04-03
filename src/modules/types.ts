export type DeepReadonly<T> = T extends (infer R)[]
  ? DeepReadonlyArray<R>
  : T extends DeepReadonlyArray<unknown>
  ? T
  : T extends Function
  ? T
  : T extends Record<string, unknown>
  ? DeepReadonlyObject<T>
  : T

export type DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>

export type DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}

export interface IPaginationInput {
  totalPages: number
  totalCount: number
  page: number
  size: number
}

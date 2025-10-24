export interface ErrorResponse<Data> {
  message: string
  data: Data
}

export interface SuccessResponse<Data> {
  message: string
  data: Data
}

//-? sẽ loại bỏ key optional như ?: ?. để không undefined
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}

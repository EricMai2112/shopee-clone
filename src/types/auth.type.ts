import type { User } from './user.type'
import type { ResponseApi } from './util.type'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>

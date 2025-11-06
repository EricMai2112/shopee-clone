import type { User } from 'src/types/user.type'
import type { SuccessResponse } from 'src/types/util.type'
import http from 'src/utils/http'

interface BodyUpdateProfile extends Omit<User, '_id' | 'roles' | 'createdAt' | 'updatedAt' | 'email'> {
  password: string
  new_password: string
}

const userApi = {
  getProfile() {
    return http.get<SuccessResponse<User>>('/me')
  },
  updateProfile(body: BodyUpdateProfile) {
    return http.put('/user', body)
  },
  uploadAvatar(body: FormData) {
    return http.post<SuccessResponse<string>>('/user/upload-avatar', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default userApi

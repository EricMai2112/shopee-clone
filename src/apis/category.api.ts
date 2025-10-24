import type { Category } from 'src/types/category.type'
import type { SuccessResponse } from 'src/types/util.type'
import http from 'src/utils/http'

const URL = 'categories'

const categoryApi = {
  getCategories() {
    return http.get<SuccessResponse<Category[]>>(URL)
  }
}

export default categoryApi

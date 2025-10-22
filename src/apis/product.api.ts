import type { ProductList, ProductListConfig } from 'src/types/product.type'
import type { SuccessResponse } from 'src/types/util.type'
import http from 'src/utils/http'

const URL = 'products'

const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponse<ProductList>>(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponse<ProductList>>(`${URL}/${id}`)
  }
}

export default productApi

import type { PurChase, PurchaseListStatus } from 'src/types/purchase.type'
import type { SuccessResponse } from 'src/types/util.type'
import http from 'src/utils/http'

const URL = 'purchases'

const purchaseApi = {
  addToCart(body: { product_id: string; buy_count: number }) {
    return http.post<SuccessResponse<PurChase>>(`${URL}/add-to-cart`, body)
  },
  getPurchases(params: { status: PurchaseListStatus }) {
    return http.get<SuccessResponse<PurChase[]>>(URL, {
      params
    })
  }
}

export default purchaseApi

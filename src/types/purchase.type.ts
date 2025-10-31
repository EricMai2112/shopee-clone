import type { Product } from './product.type'

export type PurChaseStatus = -1 | 1 | 2 | 3 | 4 | 5

export type PurchaseListStatus = PurChaseStatus | 0

export interface PurChase {
  _id: string
  buy_count: number
  price: number
  price_before_discount: number
  status: PurChaseStatus
  user: string
  product: Product
  createdAt: string
  updatedAt: string
}

export interface ExtendedPurchase extends PurChase {
  disabled: boolean
  checked: boolean
}

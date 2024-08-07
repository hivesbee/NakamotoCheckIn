type Shop = {
  id: string
  name: string
  latitude: number
  longitude: number
  address: string
  tel: string
  business_hour: string
  regular_holiday: string
  shop_order: number

  created_at: string
  updated_at: string
}

type CheckedShops = Shop & {
  checked: boolean
}

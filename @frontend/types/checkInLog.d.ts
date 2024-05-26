type CheckInLog = {
  id: string
  shop_id: string
  shop_photo_url: string
  user_id: string
  checked_at: string
  created_at: string
  updated_at: string
}

type CheckInLogDetail = CheckInLog & {
  shop_name: string
}

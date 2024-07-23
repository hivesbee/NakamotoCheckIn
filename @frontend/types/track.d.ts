type Track = {
  id: string
  checked_at: string
} & Pick<Shop, 'id' | 'name'>

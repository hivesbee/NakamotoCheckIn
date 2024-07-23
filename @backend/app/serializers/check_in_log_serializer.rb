class CheckInLogSerializer < ActiveModel::Serializer
  attributes :id, :checked_at
  has_one :shop
end

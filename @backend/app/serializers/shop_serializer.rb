class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :longitude, :latitude, :address, :tel, :business_hour, :shop_order, :prefecture, :prefecture_order, :regular_holiday
end

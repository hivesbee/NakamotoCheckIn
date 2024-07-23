class Shop < ApplicationRecord
  validates :name, presence: true
  validates :prefecture, presence: true
  validates :address, presence: true
  validates :tel, presence: true
  validates :business_hour, presence: true
  validates :longitude, presence: true, numericality: true
  validates :latitude, presence: true, numericality: true
  validates :prefecture_order, presence: true, numericality: true
  validates :shop_order, presence: true, numericality: true
  has_many :check_in_log
end

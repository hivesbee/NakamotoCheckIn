class AddPrefectureToShops < ActiveRecord::Migration[7.1]
  def change
    add_column :shops, :prefecture, :string
    add_column :shops, :prefecture_order, :int, limit: 2
  end
end

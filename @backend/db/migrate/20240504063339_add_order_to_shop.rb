class AddOrderToShop < ActiveRecord::Migration[7.1]
  def change
    add_column :shops, :order, :int, :limit => 2
  end
end

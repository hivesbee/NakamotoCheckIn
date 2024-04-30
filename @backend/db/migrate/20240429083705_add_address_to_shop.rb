class AddAddressToShop < ActiveRecord::Migration[7.1]
  def change
    add_column :shops, :address, :string
  end
end

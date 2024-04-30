class AddLatitudeToShop < ActiveRecord::Migration[7.1]
  def change
    add_column :shops, :latitude, :string
  end
end

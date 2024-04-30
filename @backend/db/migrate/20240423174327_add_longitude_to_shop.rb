class AddLongitudeToShop < ActiveRecord::Migration[7.1]
  def change
    add_column :shops, :longitude, :string
  end
end

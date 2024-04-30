class ChangeDataLongitudeAndLatitudeToShop < ActiveRecord::Migration[7.1]
  def change
    change_column :shops, :latitude, 'numeric USING CAST(latitude AS numeric)'
    change_column :shops, :longitude, 'numeric USING CAST(longitude AS numeric)'
  end
end

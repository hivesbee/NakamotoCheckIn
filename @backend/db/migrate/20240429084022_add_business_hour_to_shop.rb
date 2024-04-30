class AddBusinessHourToShop < ActiveRecord::Migration[7.1]
  def change
    add_column :shops, :business_hour, :string
  end
end

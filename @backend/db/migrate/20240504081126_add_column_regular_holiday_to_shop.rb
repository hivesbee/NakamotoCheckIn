class AddColumnRegularHolidayToShop < ActiveRecord::Migration[7.1]
  def change
    add_column :shops, :regular_holiday, :string
  end
end

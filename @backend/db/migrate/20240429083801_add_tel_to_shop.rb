class AddTelToShop < ActiveRecord::Migration[7.1]
  def change
    add_column :shops, :tel, :string
  end
end

class RenameOrderColumnToShopOrder < ActiveRecord::Migration[7.1]
  def change
    rename_column :shops, :order, :shop_order
  end
end

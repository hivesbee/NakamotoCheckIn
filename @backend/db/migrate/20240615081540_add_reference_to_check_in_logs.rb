class AddReferenceToCheckInLogs < ActiveRecord::Migration[7.1]
  def change
    add_reference :check_in_logs, :shops
    add_foreign_key :check_in_logs, :shops
    # add_belongs_to :check_in_logs, :shop_id
    # add_belongs_to :shops, :id
  end
end

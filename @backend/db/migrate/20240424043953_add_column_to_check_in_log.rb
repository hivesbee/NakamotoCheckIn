class AddColumnToCheckInLog < ActiveRecord::Migration[7.1]
  def change
    add_column :check_in_logs, :shop_id, :uuid
    add_column :check_in_logs, :checked_at, :datetime
  end
end

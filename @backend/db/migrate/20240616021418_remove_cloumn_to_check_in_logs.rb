class RemoveCloumnToCheckInLogs < ActiveRecord::Migration[7.1]
  def change
    remove_column :check_in_logs, :shops_id
  end
end

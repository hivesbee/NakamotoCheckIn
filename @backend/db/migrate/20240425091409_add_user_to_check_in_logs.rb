class AddUserToCheckInLogs < ActiveRecord::Migration[7.1]
  def change
    add_column :check_in_logs, :user_id, :uuid
  end
end

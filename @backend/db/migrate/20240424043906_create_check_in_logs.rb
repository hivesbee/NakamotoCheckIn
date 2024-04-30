class CreateCheckInLogs < ActiveRecord::Migration[7.1]
  def change
    create_table :check_in_logs, id: :uuid do |t|

      t.timestamps
    end
  end
end

class ChangeLongestRun < ActiveRecord::Migration[5.0]
  def change
    change_column :resorts, :longest_run, :float, null: true
  end
end

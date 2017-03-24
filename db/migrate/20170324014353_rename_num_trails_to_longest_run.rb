class RenameNumTrailsToLongestRun < ActiveRecord::Migration[5.0]
  def change
    rename_column :resorts, :num_trails, :longest_run
    add_column :resorts, :region, :string
  end
end

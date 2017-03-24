class ChangeLongestRunData < ActiveRecord::Migration[5.0]
  def change
    change_column :resorts, :longest_run, :float
    change_column :resorts, :vertical_drop, :integer, null: true
    change_column :resorts, :peak_elevation, :integer, null: true
    change_column :resorts, :avg_snowfall, :float, null: true
    change_column :resorts, :num_lifts, :integer, null: true
    change_column :resorts, :skiable_acres, :integer, null: true
    change_column :resorts, :trail_map_url, :string, null: true
  end
end

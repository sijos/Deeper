class AddSkiableTerrain < ActiveRecord::Migration[5.0]
  def change
    add_column :resorts, :skiable_acres, :integer, null: false
  end
end

class CreateResorts < ActiveRecord::Migration[5.0]
  def change
    create_table :resorts do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :zip, null: false
      t.string :city, null: false
      t.string :state_province, null: false
      t.string :country, null: false
      t.integer :vertical_drop, null: false
      t.integer :peak_elevation, null: false
      t.float :avg_snowfall, null: false
      t.integer :num_trails, null: false
      t.integer :num_lifts, null: false
      t.integer :price_rating, null: false
      t.string :website_url, null: false
      t.string :trail_map_url, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end

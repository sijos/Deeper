class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :resort_id, null: false
      t.integer :user_id, null: false
      t.text :body, null: false
      t.integer :overall_rating, null: false
      t.integer :basic_t_rating, null: false
      t.integer :adv_t_rating, null: false
      t.integer :amenities_rating, null: false
      t.integer :services_rating, null: false
      t.integer :value_rating, null: false

      t.timestamps
    end
    add_index :reviews, :resort_id
    add_index :reviews, :user_id
  end
end

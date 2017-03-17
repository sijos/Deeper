class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.integer :resort_id, null: false
      t.integer :user_id, null: false
      t.string :url, null: false
      t.string :caption

      t.timestamps
    end
    add_index :photos, :resort_id
    add_index :photos, :user_id
  end
end

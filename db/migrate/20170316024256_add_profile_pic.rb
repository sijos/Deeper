class AddProfilePic < ActiveRecord::Migration[5.0]
  def change
    add_column :resorts, :profile_pic_url, :string, default: ""
  end
end

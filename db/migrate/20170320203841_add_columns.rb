class AddColumns < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :profile_pic_url, :string, default: "http://res.cloudinary.com/dagjelvab/image/upload/v1489967630/default-profile.png"
  end
end

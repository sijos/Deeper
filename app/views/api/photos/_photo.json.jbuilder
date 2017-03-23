json.extract! photo, :id, :resort_id, :url

json.poster do
  json.extract! photo.user :username, :profile_pic_url, :id
end

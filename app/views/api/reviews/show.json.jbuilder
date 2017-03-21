json.extract! @review, :id, :body, :overall_rating, :basic_t_rating,
  :adv_t_rating, :amenities_rating, :services_rating, :value_rating

json.date_posted @review.created_at.strftime("%_m/%d/%Y")

json.reviewer do
  json.extract! @review.user, :username, :profile_pic_url
end

json.extract! @resort, :id, :name, :address, :zip, :city,
  :state_province, :country, :profile_pic_url, :vertical_drop,
  :peak_elevation, :avg_snowfall, :num_trails, :num_lifts, :price_rating,
  :website_url, :trail_map_url, :lat, :lng, :skiable_acres

json.num_reviews @resort.reviews.length
json.avg_rating @avg_rating

json.reviews @resort.sorted_reviews do |review|
  json.id review.id
  json.date_posted review.created_at.strftime("%_m/%d/%Y")
  json.overall_rating review.overall_rating
  json.basic_t_rating review.basic_t_rating
  json.adv_t_rating review.adv_t_rating
  json.amenities_rating review.amenities_rating
  json.services_rating review.services_rating
  json.value_rating review.value_rating
  json.body review.body

  json.reviewer do
    json.extract! review.user, :username, :profile_pic_url, :id
  end
end

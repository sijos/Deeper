json.extract! @resort, :id, :name, :address, :zip, :city, :region,
  :state_province, :country, :profile_pic_url, :vertical_drop,
  :peak_elevation, :avg_snowfall, :longest_run, :num_lifts, :price_rating,
  :website_url, :trail_map_url, :lat, :lng, :skiable_acres

json.num_reviews @resort.reviews.length
json.avg_rating @avg_rating
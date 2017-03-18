json.extract! @resort, :id, :name, :address, :zip, :city,
  :state_province, :country, :profile_pic_url, :vertical_drop,
  :peak_elevation, :avg_snowfall, :num_trails, :num_lifts, :price_rating,
  :website_url, :trail_map_url, :lat, :lng, :skiable_acres

@resort.reviews

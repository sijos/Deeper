@resorts.each do |resort|
  json.set! resort.id do
    json.extract! resort, :id, :name, :address, :zip, :city, :lat, :lng,
      :state_province, :country, :region, :profile_pic_url, :website_url
    json.avg_rating resort.avg_rating
    json.review_count resort.reviews.length
  end
end

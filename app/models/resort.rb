class Resort < ApplicationRecord
  validates :name, :address, :zip, :city, :state_province, :country,
    :vertical_drop, :peak_elevation, :avg_snowfall, :num_trails, :num_lifts,
    :price_rating, :website_url, :trail_map_url, :lat, :lng, presence: true
  validates :price_rating, inclusion: [1, 2, 3, 4]
  validates :name, uniqueness: true

  has_many :reviews
  has_many :photos
end

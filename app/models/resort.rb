class Resort < ApplicationRecord
  validates :name, :address, :zip, :city, :country, :region,
    :price_rating, :website_url, :lat, :lng, presence: true
  validates :price_rating, inclusion: [1, 2, 3, 4]
  validates :name, uniqueness: true

  has_many :reviews
  has_many :photos

  def avg_rating
    ratings = self.reviews.map(&:overall_rating)
    ratings.inject { |sum, el| sum + el }.to_f / ratings.length
  end

  def self.most_popular
    Resort.joins(:reviews).group("resorts.id").
      order("COUNT(reviews.id) DESC").
      limit(8)
  end

  def self.search(query)
    Resort.where("LOWER(resorts.name) like ?", "%#{query.downcase}%")
  end

  def sorted_reviews
    self.reviews.sort { |a, b| b.updated_at <=> a.updated_at }
  end
end

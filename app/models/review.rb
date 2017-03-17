class Review < ApplicationRecord
  validates :resort_id, :user_id, :body, :overall_rating, :basic_t_rating,
    :adv_t_rating, :amenities_rating, :services_rating, :value_rating, presence: true
  validates :overall_rating, :basic_t_rating, :adv_t_rating, :amenities_rating,
    :services_rating, inclusion: [1, 2, 3, 4, 5]

  belongs_to :resort
  belongs_to :user
end

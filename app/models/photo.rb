class Photo < ApplicationRecord
  validates :resort_id, :user_id, :url, presence: true

  belongs_to :resort
  belongs_to :user
end

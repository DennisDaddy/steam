class Movie < ApplicationRecord
  belongs_to :user
  belongs_to :category
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  validates :title, presence: true, length: { maximum: 50}
  validates :content, presence: true
end

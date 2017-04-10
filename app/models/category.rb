class Category < ApplicationRecord
  validates :name, presence: true
  validates :score_type, presence: true
  validates :unit, presence: true
end

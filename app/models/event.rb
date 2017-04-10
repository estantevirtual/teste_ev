class Event < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  validates :begin_dt, presence: true
  validates :attempts, presence: true
  validates :category_id, presence: true
  belongs_to :category
end

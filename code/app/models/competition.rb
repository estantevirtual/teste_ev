class Competition < ApplicationRecord
  belongs_to :modality
  has_many :results

  validates_presence_of :name, :modality_id, :starts_at

  def ranking
    modality.calculate_ranking(self)
  end

  def finish
    update_attributes(finished_at: DateTime.now)
  end

  def finished?
    finished_at.present?
  end

  def javelin_throw?
    modality.type == 'JavelinThrow'
  end
end

class Result < ApplicationRecord
  belongs_to :competition

  validates_presence_of :competition_id, :athlete, :value
  validates :value, numericality: true, if: 'value.present?'

  validate :check_competition_is_finished, if: 'competition.present?'
  validate :check_limit_attempts, if: 'competition && competition.javelin_throw?'

  def less_than_three_attempts?(athlete)
    competition.results.where(athlete: athlete).size < 3
  end

  def check_competition_is_finished
    return if competition.finished_at.blank?
    errors.add(:competition, 'already finished and dont accept new results')
  end

  def check_limit_attempts
    return if less_than_three_attempts?(athlete)
    errors.add(:athlete, 'exceds the attempts limit')
  end
end

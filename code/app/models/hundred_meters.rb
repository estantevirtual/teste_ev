class HundredMeters < Modality
  has_many :competitions
  def calculate_ranking(competition)
    competition.results.order(:value)
  end
end

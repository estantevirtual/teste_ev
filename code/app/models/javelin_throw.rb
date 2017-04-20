class JavelinThrow < Modality
  has_many :competitions
  def calculate_ranking(competition)
    marks = competition.results.group_by(&:athlete)
    marks.map { |_, results| results.max_by(&:value) }.sort { |a, b| b.value <=> a.value }
  end
end

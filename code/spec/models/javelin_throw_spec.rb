require 'rails_helper'

RSpec.describe JavelinThrow do
  subject(:competition) { Competition.new }

  describe '#calculate_ranking' do
    it 'returns the bests marks of each athlete' do
      first = Result.new(value: 5.1, athlete: 'Pedro')
      last = Result.new(value: 4.5, athlete: 'Joao')

      allow(competition).to receive(:results) {
        [
          first,
          Result.new(value: 1.1, athlete: 'Pedro'),
          Result.new(value: 0.1, athlete: 'Joao'),
          last,
          Result.new(value: 4.6, athlete: 'Jose')
        ]
      }

      ranking = JavelinThrow.new.calculate_ranking(competition)

      expect(ranking).to all be_an(Result)
      expect(ranking.first).to be(first)
      expect(ranking.last).to be(last)
    end
  end
end

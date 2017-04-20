require 'rails_helper'

RSpec.describe Result do
  subject(:competition) { Competition.new }
  subject(:result) { Result.new }

  context '#valid?' do
    it 'is not valid without required fields' do
      expect(result).not_to be_valid
      expect(result.errors).to have_key(:athlete)
      expect(result.errors).to have_key(:value)
    end

    it 'is not valid if the value isnt a number' do
      expect(result).not_to be_valid
      expect(result.errors[:value]).to include("can't be blank")
    end

    it 'is not valid if competition is finished' do
      competition.modality = Modality.new(type: 'HundredMeters')
      competition.finished_at = DateTime.now
      result.competition = competition

      expect(result).not_to be_valid
      expect(result.errors[:competition]).to include('already finished and dont accept new results')
    end

    it 'is not valid if an athlete has 3 attempts in Javelin Throw' do
      competition.modality = Modality.new(type: 'JavelinThrow')
      result.competition = competition
      result.athlete = 'Joao'

      allow(result).to receive(:less_than_three_attempts?).with('Joao').and_return(false)

      expect(result).not_to be_valid
      expect(result.errors[:athlete]).to include('exceds the attempts limit')
    end
  end
end

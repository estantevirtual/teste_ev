require 'rails_helper'

RSpec.describe Competition do
  subject(:competition) { Competition.new }

  describe '#valid?' do
    it 'is not valid without required fields' do
      expect(competition).not_to be_valid
      expect(competition.errors).to have_key(:name)
      expect(competition.errors).to have_key(:modality_id)
      expect(competition.errors).to have_key(:starts_at)
    end
  end

  describe '#finish' do
    it 'finish a competition' do
      expect(competition).to receive(:update_attributes).with(finished_at: DateTime.now)

      competition.finish
    end
  end

  describe '#finished?' do
    it 'verify if competition was finished' do
      competition.finished_at = DateTime.now

      expect(competition).to be_finished
    end
  end

  describe '#javelin_throw?' do
    it 'verify if competition is javelin throw modality' do
      competition.modality = Modality.new(type: 'JavelinThrow')

      expect(competition).to be_javelin_throw
    end
  end

  describe '#ranking' do
    it 'verify if ranking was called' do
      competition.modality = Modality.new(type: 'HundredMeters')

      expect(competition.modality).to receive(:calculate_ranking).with(competition)

      competition.ranking
    end
  end
end

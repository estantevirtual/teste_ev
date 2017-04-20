class CompetitionSerializer < ActiveModel::Serializer
  belongs_to :modality

  attributes :name, :modality, :starts_at, :finished_at

  def modality
    object.modality.name
  end
end

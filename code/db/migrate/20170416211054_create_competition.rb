class CreateCompetition < ActiveRecord::Migration[5.0]
  def change
    create_table :competitions do |t|
      t.string :name
      t.datetime :starts_at
      t.datetime :finished_at
      t.references :modality
    end
  end
end

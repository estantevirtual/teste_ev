class CreateResults < ActiveRecord::Migration[5.0]
  def change
    create_table :results do |t|
      t.references :competition
      t.string :athlete
      t.float :value
    end
  end
end

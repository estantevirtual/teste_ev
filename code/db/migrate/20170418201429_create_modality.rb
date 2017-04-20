class CreateModality < ActiveRecord::Migration[5.0]
  def change
    create_table :modalities do |t|
      t.string :name
      t.string :unity
      t.string :type
    end
  end
end

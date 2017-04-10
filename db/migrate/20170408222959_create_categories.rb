class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    drop_table :categories
    create_table :categories do |t|
      t.string :name
      t.string :score_type
      t.string :unit

      t.timestamps
    end
  end
end

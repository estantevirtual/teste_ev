class CreateSportsmen < ActiveRecord::Migration[5.0]
  def change
    drop_table :sportsmen
    create_table :sportsmen do |t|
      t.string :name
      t.integer :age

      t.timestamps
    end
  end
end

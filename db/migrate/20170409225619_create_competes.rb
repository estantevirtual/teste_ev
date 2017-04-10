class CreateCompetes < ActiveRecord::Migration[5.0]
  def change
    create_table :competes do |t|
      t.decimal :score
      t.references :sportsman, foreign_key: true
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end

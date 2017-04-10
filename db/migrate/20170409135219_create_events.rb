class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    drop_table :events
    create_table :events do |t|
      t.string :location
      t.string :name
      t.integer :attempts
      t.date :begin_dt

      t.timestamps
    end
  end
end

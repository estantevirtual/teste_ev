class AddEndedToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :ended, :boolean, default: false
  end
end

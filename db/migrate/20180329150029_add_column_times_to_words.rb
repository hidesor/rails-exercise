class AddColumnTimesToWords < ActiveRecord::Migration[5.0]
  def change
    add_column :words, :times, :integer
  end
end

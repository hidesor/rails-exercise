class AddColumnIsMarkToWord < ActiveRecord::Migration[5.0]
  def change
    add_column :words, :is_mark, :boolean
  end
end

class CreateHouses < ActiveRecord::Migration[5.0]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :area
      t.string :address
      t.string :purpose
      t.string :square_feet
      t.string :remark
      t.string :in_floor
      t.string :total_floor
      t.string :total_price
      t.timestamps
    end
  end
end

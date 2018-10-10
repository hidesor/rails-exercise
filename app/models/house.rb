class House < ApplicationRecord
  # https://data.gov.tw/dataset/26820
  # http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000221-001

  # 取回 house的資料存入db
  def self.get_house
    require 'net/http'
    source = 'http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000221-001'
    resp = Net::HTTP.get_response(URI.parse(source))
    data = resp.body
    result = JSON.parse(data)
    House.destroy_all
    result["result"]["records"].each do |house|
      House.create(
        area: house["district"],
        address: house["rps02"],
        purpose: house["rps04"],
        square_feet: house["rps03"],
        remark: house["rps11"],
        in_floor: house["rps09"],
        total_floor: house["rps10"],
        total_price: house["rps21"]
      )
    end
  end

  # 整理資料
  def self.house_data
    areas = House.select("area").group("area")
    square_feet_arr = []
    total_price_arr = []
    areas_arr = []
    areas.each do |area|
      square_feet_data = House.where(area: area.area).map{ |m| m.square_feet.to_f }
      square_feet_avg = square_feet_data.sum/square_feet_data.size
      total_price_data = House.where(area: area.area).map{ |m| m.total_price.to_f }
      total_price_avg = total_price_data.sum/total_price_data.size
      if square_feet_avg < 150
        areas_arr << area.area
        square_feet_arr << square_feet_avg
        total_price_arr << (total_price_avg/10000)
      end
    end
    return [areas_arr, square_feet_arr, total_price_arr]
  end

end

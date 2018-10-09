class House < ApplicationRecord
  # https://data.gov.tw/dataset/26820
  # http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000221-001

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
end

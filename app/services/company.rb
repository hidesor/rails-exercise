class Company
  def initialize(gui_number)
    @gui_number = gui_number
  end

  # 產生統編
  def create
    check
    binding.pry
  end

  # 驗證統編是否正確
  def check
    require 'rest-client'
    url = "http://data.gcis.nat.gov.tw/od/data/api/5F64D864-61CB-4D0D-8AD9-492047CC1EA6?$format=json&$filter=Business_Accounting_NO%20eq%20"+@gui_number+"&$skip=0&$top=50" 
    response = RestClient.get(url)
    (response == "")? (return false) : (response_data = JSON.parse(response.body))
    (response_data.count > 0 && response_data[0]["Business_Accounting_NO"] == @gui_number)? true : false
  end

end

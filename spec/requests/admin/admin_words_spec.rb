require 'rails_helper'

RSpec.describe "Admin::Words", type: :request do
  describe "GET /admin_words" do
    it "works! (now write some real specs)" do
      get admin_words_index_path
      expect(response).to have_http_status(200)
    end
  end
end

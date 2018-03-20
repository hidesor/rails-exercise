require "rails_helper"

RSpec.describe Admin::WordsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/admin/words").to route_to("admin/words#index")
    end

    it "routes to #new" do
      expect(:get => "/admin/words/new").to route_to("admin/words#new")
    end

    it "routes to #show" do
      expect(:get => "/admin/words/1").to route_to("admin/words#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/admin/words/1/edit").to route_to("admin/words#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/admin/words").to route_to("admin/words#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/admin/words/1").to route_to("admin/words#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/admin/words/1").to route_to("admin/words#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/admin/words/1").to route_to("admin/words#destroy", :id => "1")
    end

  end
end

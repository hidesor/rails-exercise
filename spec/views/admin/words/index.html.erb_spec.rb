require 'rails_helper'

RSpec.describe "admin/words/index", type: :view do
  before(:each) do
    assign(:words, [
      Word.create!(),
      Word.create!()
    ])
  end

  it "renders a list of admin/words" do
    render
  end
end

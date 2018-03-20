require 'rails_helper'

RSpec.describe "admin/words/new", type: :view do
  before(:each) do
    assign(:admin_word, Word.new())
  end

  it "renders new admin_word form" do
    render

    assert_select "form[action=?][method=?]", words_path, "post" do
    end
  end
end

require 'rails_helper'

RSpec.describe "admin/words/edit", type: :view do
  before(:each) do
    @admin_word = assign(:admin_word, Word.create!())
  end

  it "renders the edit admin_word form" do
    render

    assert_select "form[action=?][method=?]", admin_word_path(@admin_word), "post" do
    end
  end
end

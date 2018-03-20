require 'rails_helper'

RSpec.describe "admin/words/show", type: :view do
  before(:each) do
    @admin_word = assign(:admin_word, Word.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end

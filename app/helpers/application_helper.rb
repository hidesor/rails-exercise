module ApplicationHelper
  def short_word(word, length)
    word[0..length]+'...'
  end

end

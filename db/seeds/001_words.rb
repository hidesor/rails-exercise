for i in 1..20
  for j in 1..6
    puts i
    Word.create!([
      { name: 'apple', content: '蘋果'+ j.to_s, times: i},
    ])
  end
end

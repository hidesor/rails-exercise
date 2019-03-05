$(document).ready(function(){
  $('.word_btn').click(function(){
     console.log($(this)[0]);

     word = $(this)[0].innerText;
     console.log(word)
     url = "https://translate.google.com.tw/?hl=zh-TW#view=home&op=translate&sl=en&tl=zh-TW&text="+word
     window.open(url);
  });
});

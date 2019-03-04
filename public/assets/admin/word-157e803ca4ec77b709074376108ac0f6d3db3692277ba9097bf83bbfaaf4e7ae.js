$(document).ready(function(){
  $('.js-sound').click(function(){
     id = $(this)[0].id.substring(4,6);
     word_id = 'word_' + id;
     word = $('#'+word_id).html();
     url = "https://translate.google.com.tw/?hl=zh-TW#view=home&op=translate&sl=en&tl=zh-TW&text="+word

     // url = "http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=" + word + "&tl=en-gb";
     // location.href = url;
     window.open(url);
     // url = 'https://www.google.com.tw/';
     // console.log(url);
     // iframe = document.getElementById("word_sound");
     // iframe.src = url;
     // window.open(url, 'test', config='height=100,width=100');
  });
});

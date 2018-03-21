$(document).ready(function(){
  $('.js-sound').click(function(){
     id = $(this)[0].id.substring(4,6);
     word_id = 'word_' + id;
     word = $('#'+word_id).html();
     url = "http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=" + word + "&tl=en-gb";
     // location.href = url;
     // console.log(url);
     document.getElementById("word_sound").src = url;
     // window.open(url, 'test', config='height=100,width=100');
  });
});

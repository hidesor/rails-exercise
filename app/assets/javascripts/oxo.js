$(document).ready(function(){
  $('.ox_btn').click(function(){
     //id = $(this)[0].id.substring(4,6);
     console.log($(this)[0].id.substring(2,3));
     $(this).html('O')
     // word_id = 'word_' + id;
     // word = $('#'+word_id).html();
     // url = "http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=" + word + "&tl=en-gb";
     // location.href = url;
     // url = 'https://www.google.com.tw/';
     // console.log(url);
     // iframe = document.getElementById("word_sound");
     // iframe.src = url;
     // window.open(url, 'test', config='height=100,width=100');
  });
});

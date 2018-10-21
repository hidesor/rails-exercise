$(document).ready(function(){

    var can_push_arr = [];
    var user_push_arr = [];
    var npc_push_arr = []

    var restart = function(){
        can_push_arr = [1,2,3,4,5,6,7,8,9];
        user_push_arr = [];
        npc_push_arr = [];
    }
    restart();


    // 使用者按下按鈕後動作
    $('.ox_btn').click(function(){
        console.log($(this)[0].id.substring(2,3));
        id = $(this)[0].id.substring(2,3);

        user_push_arr.push(Number(id));

        can_push_arr = jQuery.grep(can_push_arr, function(value) {
            return value != id;
        });
        console.log('can_push_arr',can_push_arr);
        console.log('user_push_arr',user_push_arr);

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

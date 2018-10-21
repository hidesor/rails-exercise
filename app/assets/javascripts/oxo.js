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

    var play_by_npc = function(){
      // npc 隨機下一格
      npc_do_id = can_push_arr[Math.floor(Math.random()*can_push_arr.length)];
      console.log('npc_do_id',npc_do_id);

      npc_push_arr.push(Number(npc_do_id));
      can_push_arr = jQuery.grep(can_push_arr, function(value) {
          return value != npc_do_id;
      });

      $('#ox'+npc_do_id).html('X');
    }

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
        $(this).html('O');

        play_by_npc();
    });


});

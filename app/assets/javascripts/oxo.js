$(document).ready(function(){

    var npc_first_arr = [1,3,5,7,9];
    var success_arr = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

    var can_push_arr = [];
    var user_push_arr = [];
    var npc_push_arr = []

    var restart = function(){
        can_push_arr = [1,2,3,4,5,6,7,8,9];
        user_push_arr = [];
        npc_push_arr = [];
    }
    restart();

    function randomSort(a, b) {
      return Math.random() > 0.5 ? -1 : 1;
    }

    var play_by_npc = function(){
      // npc 隨機下一格
      // npc_do_id = can_push_arr[Math.floor(Math.random()*can_push_arr.length)];
      npc_do_id = 0
      if(npc_push_arr.length == 0){
          $.each(npc_first_arr.sort(randomSort), function(index, value ) {
              if(user_push_arr.indexOf(Number(value)) == -1 ){
                  npc_do_id = value;
                  return false;
              }
          })
      }else{

      }

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
        console.log('id',id);
        console.log('can_push_arr',can_push_arr);
        console.log('user_push_arr',user_push_arr);
        console.log('index',can_push_arr.indexOf(Number(id)));

        if(can_push_arr.indexOf(Number(id)) == -1 ){
            alert('請選其他格子喲!!');
        }else{

            user_push_arr.push(Number(id));
            can_push_arr = jQuery.grep(can_push_arr, function(value) {
                return value != id;
            });


            $(this).html('O');

            play_by_npc();
        }
    });


});

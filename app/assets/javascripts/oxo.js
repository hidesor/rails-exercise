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

    // 阻擋一直線
    var try_success = function(){
        $.each(success_arr.sort(randomSort), function(index, value ) {
            let intersection = value.filter(v => user_push_arr.includes(v)) // [2]
            if(intersection.length == 2){
                y0 = intersection[0];
                y1 = intersection[1];
                tmp_value = value;
                tmp_value = jQuery.grep(tmp_value, function(v) {
                    return v != y0;
                });
                tmp_value = jQuery.grep(tmp_value, function(v) {
                    return v != y1;
                });
                success_id = tmp_value[0];
                if(can_push_arr.indexOf(Number(success_id)) !== -1 ){
                    return false;
                }
            }else{
                success_id = 0;
            }
        })
        return success_id;
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
          npc_do_id = try_success();
          console.log('npc_do_id',npc_do_id);
          if(can_push_arr.indexOf(Number(npc_do_id)) == -1 ){
              npc_do_id = can_push_arr[Math.floor(Math.random()*can_push_arr.length)];
          }
      }

      npc_push_arr.push(Number(npc_do_id));
      can_push_arr = jQuery.grep(can_push_arr, function(value) {
          return value != npc_do_id;
      });

      $('#ox'+npc_do_id).html('X');
      if(success_arr.indexOf(npc_push_arr.sort()) > 0){
          alert('you lost!');
      }
    }

    var check_success = function(){
        var is_success = false;
        $.each(success_arr.sort(randomSort), function(index, value ) {
            let intersection = value.filter(v => user_push_arr.includes(v)) // [2]
            if(intersection.length == 3){
                console.log('intersection',intersection);
                alert('you win!');
                is_success = true;
                return false;
            }
        })
        if(is_success == false){
            play_by_npc();
        }
    }

    // 使用者按下按鈕後動作
    $('.ox_btn').click(function(){
        console.log($(this)[0].id.substring(2,3));
        id = $(this)[0].id.substring(2,3);
        if(can_push_arr.indexOf(Number(id)) == -1 ){
            alert('請選其他格子喲!!');
        }else{

            user_push_arr.push(Number(id));
            can_push_arr = jQuery.grep(can_push_arr, function(value) {
                return value != id;
            });

            $(this).html('O');
            check_success();
        }
    });


});

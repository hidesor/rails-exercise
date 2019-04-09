$(document).ready(function(){ 
   $('#test_start').on('click',function(){ 
        var arithmetic = [];
        $("input[name='arithmetic[]']:checked").each( function () { 
            arithmetic.push($(this).val());
        })

        var question_qty = 10
        var lv = $('input:radio:checked[name="lv"]').val();
        console.log('arithmetic', arithmetic)
        console.log('lv', lv)
    
        $('#question').html($('<div>').addClass('list').css('color','red').html('hihi'))
          
   }) 
});


$(document).ready(function(){ 
   $('#test_start').on('click',function(){ 
        var arithmetic = [];
        $("input[name='arithmetic[]']:checked").each( function () { 
            arithmetic.push($(this).val());
        })

        var lv = $('input:radio:checked[name="lv"]').val();
        console.log('arithmetic',arithmetic)
        console.log('lv',lv)
   }) 
});


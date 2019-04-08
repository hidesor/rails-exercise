$(document).ready(function(){ 
   $('#test_start').on('click',function(){ 
        var arithmetic = [];
        $("input[name='arithmetic[]']:checked").each( function () { 
            arithmetic.push($(this).val());
        })
        console.log('arithmetic',arithmetic)
   }) 
});


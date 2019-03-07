$(document).ready(function(){
  $('.word_btn').click(function(){
     console.log($(this)[0]);

     word = $(this)[0].innerText;
     console.log(word)
     url = "https://translate.google.com.tw/?hl=zh-TW#view=home&op=translate&sl=en&tl=zh-TW&text="+word
     window.open(url);
  });

  $(".is_know").click(function(){
      console.log('is_know');
      console.log($(this)[0])
      var class_name = $(this)[0].children[0].className
      console.log('class_name', class_name);
      if(class_name == 'fa fa-question'){
        $(this)[0].children[0].outerHTML = '<i class="fab fa-angellist"></i>'
      }else if(class_name == 'fab fa-angellist'){
        $(this)[0].children[0].outerHTML = '<i class="fa fa-thumbs-down" aria-hidden="true"></i>'
      }else{
        $(this)[0].children[0].outerHTML = '<i class="fab fa-angellist"></i>'
      }
  })

});

// <i class="fab fa-angellist"></i>
// <i class="fa fa-thumbs-down" aria-hidden="true"></i>
